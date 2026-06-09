'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import styles from './ChatBot.module.css';
import { FaPaperPlane, FaTimes, FaCommentAlt } from 'react-icons/fa';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
}

const BOOKING_URL = 'https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF';

const INITIAL_SUGGESTIONS = [
    "What sizes do you offer?",
    "How much does it cost?",
    "What areas do you serve?",
    "Book Online",
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
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = useCallback(async (text: string = inputValue) => {
        if (!text.trim() || isTyping) return;

        // Book Online shortcut — open directly without API call
        if (text === 'Book Online' || text === 'Book Now') {
            window.open(BOOKING_URL, '_blank');
            return;
        }

        const userMessage: Message = { id: Date.now(), text, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);
        setSuggestions([]);

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

            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: data.reply,
                sender: 'bot',
            }]);

            setSuggestions(["Book Online", "Call 601-316-7891", "What else can I help with?"]);

        } catch (err) {
            console.error('Chat error:', err);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: "Sorry, something went wrong on my end! Give us a call at [601-316-7891](tel:6013167891) and we'll help you out directly. 📞",
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

    // Render helper: markdown → HTML with clickable links/phones
    const renderText = (text: string) => text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;color:inherit;font-weight:600;">$1</a>')
        .replace(/(?<!\[)(?<!href=")601-316-7891(?!\])/g, '<a href="tel:6013167891" style="text-decoration:underline;color:inherit;font-weight:600;">601-316-7891</a>')
        .replace(/(?<!\[)(?<!href=")(https:\/\/embed\.survcart\.com[^\s<"]*)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" style="text-decoration:underline;color:inherit;font-weight:600;">Book Online</a>')
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

                        <div ref={messagesEndRef} />
                    </div>

                    {suggestions.length > 0 && (
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
                            placeholder="Ask a question..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleKeyDown}
                            disabled={isTyping}
                        />
                        <button type="submit" className={styles.sendButton} disabled={isTyping}>
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
