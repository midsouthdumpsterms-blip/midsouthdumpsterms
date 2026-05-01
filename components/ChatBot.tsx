'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import styles from './ChatBot.module.css';
import { FaPaperPlane, FaTimes, FaCommentAlt, FaCheckCircle } from 'react-icons/fa';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
}

interface LeadData {
    name: string;
    business?: string;
    phone: string;
    email: string;
    address: string;
    placement?: string;
    size: string;
    days: string;
    date: string;
    summary: string;
}

const BOOKING_URL = 'https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF';

const INITIAL_SUGGESTIONS = [
    "What sizes do you offer?",
    "How much does it cost?",
    "Same-day delivery?",
    "Do you serve my area?",
];

const ChatBot: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 0,
            text: "Hey there! 👋 I'm your Mid South Assistant — powered by AI and trained on everything about our dumpster rental service. Ask me anything about pricing, sizes, what goes in, or your specific project. What can I help you with today?",
            sender: 'bot'
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>(INITIAL_SUGGESTIONS);
    const [pendingLead, setPendingLead] = useState<LeadData | null>(null);
    const [sendingLead, setSendingLead] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, pendingLead]);

    // Listen for pricing-idle trigger from analytics.ts
    useEffect(() => {
        const handleChatbotOpen = (e: Event) => {
            const customEvent = e as CustomEvent;
            setIsOpen(true);
            if (customEvent.detail?.message) {
                setTimeout(() => {
                    setMessages(prev => [...prev, {
                        id: Date.now(),
                        text: customEvent.detail.message,
                        sender: 'bot',
                    }]);
                    setSuggestions(["Tell me about the 10-yard", "Tell me about the 15-yard", "Tell me about the 20-yard", "Book Now"]);
                }, 400);
            }
        };
        window.addEventListener('chatbot-open', handleChatbotOpen);
        return () => window.removeEventListener('chatbot-open', handleChatbotOpen);
    }, []);

    // ─── Send Rental Request (fires email) ───────────────────────────────────────
    const handleSendLead = useCallback(async () => {
        if (!pendingLead || sendingLead) return;
        setSendingLead(true);

        try {
            const res = await fetch('/api/chat-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ lead: pendingLead, messages }),
            });

            if (!res.ok) throw new Error(`HTTP ${res.status}`);

            setPendingLead(null);
            setMessages(prev => [...prev, {
                id: Date.now(),
                text: `✅ We've received your rental request, ${pendingLead.name.split(' ')[0]}! All rentals are subject to fleet availability — we'll reach out shortly to confirm your ${pendingLead.date !== 'Not specified' ? pendingLead.date : 'upcoming'} delivery and collect payment. If you need to check availability sooner, call us at [601-316-7891](tel:6013167891). We look forward to serving you!`,
                sender: 'bot',
            }]);
            setSuggestions(["Call 601-316-7891", "Book Online"]);

        } catch (err) {
            console.error('Lead submit error:', err);
            setMessages(prev => [...prev, {
                id: Date.now(),
                text: "Something went wrong sending your request. Please call us directly at [601-316-7891](tel:6013167891) and we'll get you sorted out right away!",
                sender: 'bot',
            }]);
            setPendingLead(null);
        } finally {
            setSendingLead(false);
        }
    }, [pendingLead, sendingLead, messages]);

    // ─── Main Chat Send ───────────────────────────────────────────────────────────
    const handleSend = useCallback(async (text: string = inputValue) => {
        if (!text.trim() || isTyping) return;

        if (text === 'Book Now' || text === 'Book Online') {
            window.open(BOOKING_URL, '_blank');
            return;
        }

        const userMessage: Message = { id: Date.now(), text, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);
        setSuggestions([]);
        setPendingLead(null); // Clear any pending lead if user keeps chatting

        try {
            const allMessages = [...messages, userMessage];

            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: allMessages }),
            });

            if (!res.ok) {
                const errData = await res.json().catch(() => ({}));
                throw new Error(errData.detail || `HTTP ${res.status}`);
            }

            const data = await res.json();

            const botMessage: Message = { id: Date.now() + 1, text: data.reply, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);

            // If Claude detected a complete lead, store it — the button will appear
            if (data.leadData) {
                setPendingLead(data.leadData);
                setSuggestions([]);
            } else {
                setSuggestions(["What else can I help with?", "How do I book?", "Call 601-316-7891"]);
            }

        } catch (err) {
            console.error('Chat error:', err);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "Sorry, something went wrong on my end! Please give us a call at [601-316-7891](tel:6013167891) and we'll help you out directly. 📞",
                sender: 'bot',
            }]);
            setSuggestions(INITIAL_SUGGESTIONS);
        } finally {
            setIsTyping(false);
        }
    }, [inputValue, isTyping, messages]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    };

    // ─── Render helper: markdown → HTML ──────────────────────────────────────────
    const renderText = (text: string) => text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;color:inherit;font-weight:600;">$1</a>')
        .replace(/(?<!\[)(?<!href=")601-316-7891(?!\])/g, '<a href="tel:6013167891" style="text-decoration:underline;color:inherit;font-weight:600;">601-316-7891</a>')
        .replace(/(?<!\[)(?<!href=")(https:\/\/embed\.survcart\.com[^\s<"]*)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;color:inherit;font-weight:600;">[Book Online]</a>')
        .replace(/\n/g, '<br/>');

    if (pathname === '/book-online') return null;

    return (
        <div className={styles.chatContainer}>
            {isOpen && (
                <div className={styles.chatWindow}>
                    <div className={styles.header}>
                        <div className={styles.headerTitle}>
                            <h3>Mid South Assistant</h3>
                            <p>AI Powered • Online Now</p>
                        </div>
                        <button className={styles.closeButton} onClick={() => setIsOpen(false)} aria-label="Close chat">
                            <FaTimes />
                        </button>
                    </div>

                    <div className={styles.messages}>
                        {messages.map(msg => (
                            <div
                                key={msg.id}
                                className={`${styles.message} ${msg.sender === 'bot' ? styles.botMessage : styles.userMessage}`}
                                dangerouslySetInnerHTML={{ __html: renderText(msg.text) }}
                            />
                        ))}

                        {isTyping && (
                            <div className={`${styles.message} ${styles.botMessage}`}>
                                <span className={styles.typingDots}>
                                    <span /><span /><span />
                                </span>
                            </div>
                        )}

                        {/* ─── Send Rental Request confirmation button ─── */}
                        {pendingLead && !isTyping && (
                            <div className={styles.sendLeadCard}>
                                <p className={styles.sendLeadHint}>Ready to submit your request?</p>
                                <button
                                    className={styles.sendLeadButton}
                                    onClick={handleSendLead}
                                    disabled={sendingLead}
                                >
                                    {sendingLead ? (
                                        <>Sending<span className={styles.typingDots} style={{ marginLeft: 8 }}><span /><span /><span /></span></>
                                    ) : (
                                        <><FaCheckCircle style={{ marginRight: 8 }} />Send Rental Request</>
                                    )}
                                </button>
                                <p className={styles.sendLeadDisclaimer}>
                                    Not right? Just type a correction above.
                                </p>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {suggestions.length > 0 && !pendingLead && (
                        <div className={styles.suggestions}>
                            {suggestions.map((s, i) => (
                                <button
                                    key={i}
                                    className={styles.suggestionButton}
                                    onClick={() => handleSend(s)}
                                    disabled={isTyping}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}

                    <form className={styles.inputArea} onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                        <input
                            type="text"
                            placeholder={pendingLead ? "Type a correction..." : "Ask a question..."}
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={isTyping || sendingLead}
                        />
                        <button type="submit" className={styles.sendButton} disabled={isTyping || sendingLead}>
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            )}

            <button className={styles.chatButton} onClick={() => setIsOpen(!isOpen)} aria-label="Open chat">
                {isOpen ? <FaTimes size={24} /> : <FaCommentAlt size={24} />}
            </button>
        </div>
    );
};

export default ChatBot;
