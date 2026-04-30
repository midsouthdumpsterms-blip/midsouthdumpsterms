'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import styles from './ChatBot.module.css';
import { FaRobot, FaPaperPlane, FaTimes, FaCommentAlt } from 'react-icons/fa';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
}

const BOOKING_URL = 'https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF';

const SUGGESTIONS = [
    'What sizes do you offer?',
    'How much does it cost?',
    'What can I put in?',
    'Do you serve my area?',
    'Same-day delivery?',
    'Book Now',
];

const INITIAL_MESSAGE: Message = {
    id: 0,
    text: "Hey there! 👋 I'm your Mid South Assistant — powered by AI and trained on everything about our dumpster rental service. Ask me anything about pricing, sizes, what goes in, or your specific project. What can I help you with today?",
    sender: 'bot',
};

const ChatBot: React.FC = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // ─── Pricing Idle Trigger ────────────────────────────────────────────────
    // Listens for the custom event fired by analytics.ts when a user idles
    // 45+ seconds on the pricing section — opens the chat with a nudge.
    useEffect(() => {
        const handler = (e: Event) => {
            const detail = (e as CustomEvent).detail as { prompt?: string };
            setIsOpen(true);
            const nudge: Message = {
                id: Date.now(),
                text: detail?.prompt ?? "Still comparing sizes? I can help you pick the right one for your project — just tell me what you're working on! 🎯",
                sender: 'bot',
            };
            setMessages(prev => [...prev, nudge]);
        };

        window.addEventListener('chatbot-open', handler);
        return () => window.removeEventListener('chatbot-open', handler);
    }, []);

    // ─── Claude API Call ─────────────────────────────────────────────────────
    const fetchBotResponse = useCallback(async (allMessages: Message[]) => {
        setIsTyping(true);
        try {
            // Filter to only user/bot messages (exclude initial greeting from API context
            // if it's the very first exchange — Claude's system prompt already sets context)
            const apiMessages = allMessages.filter(m => m.id !== 0 || m.sender === 'user');

            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: apiMessages }),
            });

            if (!res.ok) throw new Error('API error');

            const data = await res.json();
            const botMessage: Message = {
                id: Date.now(),
                text: data.response || "I'm having a little trouble right now — please call us at **601-316-7891** and we'll get you sorted out right away!",
                sender: 'bot',
            };
            setMessages(prev => [...prev, botMessage]);
        } catch {
            const errorMessage: Message = {
                id: Date.now(),
                text: "Sorry, something went wrong on my end! Please give us a call at **601-316-7891** and we'll help you out directly. 📞",
                sender: 'bot',
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    }, []);

    // ─── Send Handler ────────────────────────────────────────────────────────
    const handleSend = useCallback((text: string = inputValue) => {
        const trimmed = text.trim();
        if (!trimmed || isTyping) return;

        // "Book Now" button — open booking page directly
        if (trimmed === 'Book Now') {
            window.open(BOOKING_URL, '_blank', 'noopener,noreferrer');
            return;
        }

        const userMessage: Message = { id: Date.now(), text: trimmed, sender: 'user' };
        setInputValue('');

        setMessages(prev => {
            const updated = [...prev, userMessage];
            // Trigger API call after state update
            setTimeout(() => fetchBotResponse(updated), 0);
            return updated;
        });
    }, [inputValue, isTyping, fetchBotResponse]);

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
                        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                            <FaTimes />
                        </button>
                    </div>

                    <div className={styles.messages}>
                        {messages.map(msg => (
                            <div
                                key={msg.id}
                                className={`${styles.message} ${msg.sender === 'bot' ? styles.botMessage : styles.userMessage}`}
                                dangerouslySetInnerHTML={{
                                    __html: msg.text
                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="text-decoration: underline; color: inherit;">$1</a>')
                                        .replace(/\n/g, '<br/>')
                                }}
                            />
                        ))}

                        {isTyping && (
                            <div className={`${styles.message} ${styles.botMessage}`}>
                                <span className={styles.typingDots}>
                                    <span>.</span><span>.</span><span>.</span>
                                </span>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    <div className={styles.suggestions}>
                        {SUGGESTIONS.map((s, i) => (
                            <button
                                key={i}
                                className={styles.suggestionButton}
                                onClick={() => handleSend(s)}
                                disabled={isTyping && s !== 'Book Now'}
                            >
                                {s}
                            </button>
                        ))}
                    </div>

                    <form className={styles.inputArea} onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                        <input
                            type="text"
                            placeholder="Ask anything..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={isTyping}
                        />
                        <button type="submit" className={styles.sendButton} disabled={isTyping}>
                            <FaPaperPlane />
                        </button>
                    </form>
                </div>
            )}

            <button className={styles.chatButton} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={24} /> : <FaCommentAlt size={24} />}
            </button>
        </div>
    );
};

export default ChatBot;
