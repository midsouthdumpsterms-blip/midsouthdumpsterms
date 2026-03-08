'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatBot.module.css';
import { FaRobot, FaPaperPlane, FaTimes, FaCommentAlt } from 'react-icons/fa';

interface Message {
    id: number;
    text: string;
    sender: 'bot' | 'user';
}

const KNOWLEDGE_BASE = [
    {
        keywords: ['price', 'cost', 'how much', 'rate'],
        answer: "Our flat-rate pricing includes delivery, pickup, and disposal. Prices start at $349 for a 10-yard (1-day), $399 for a 15-yard (1-day), and $449 for a 20-yard (1-day). Our 7-day rentals are $399 (10yd), $449 (15yd), and $499 (20yd). No hidden fees!"
    },
    {
        keywords: ['size', 'yard', 'dimensions', 'big'],
        answer: "We offer three sizes: 10-yard (fits 4 pickup loads), 15-yard (fits 6 pickup loads), and 20-yard (fits 8 pickup loads). Most home cleanouts prefer the 15-yard!"
    },
    {
        keywords: ['prohibited', 'not allowed', 'cannot', 'toxic', 'hazardous', 'paint', 'tires', 'food'],
        answer: "Prohibited items include: hazardous waste (paint, oil, chemicals), tires, food waste, medical waste, and appliances with Freon (fridges/AC units). Household furniture, construction debris, and yard waste are all good!"
    },
    {
        keywords: ['mattress'],
        answer: "Good news! We accept mattresses with ZERO additional fees. Many other companies charge extra, but with us, it's included in your flat rate."
    },
    {
        keywords: ['weight', 'ton', 'overage', 'limit', 'pounds', 'how heavy', 'weigh'],
        answer: "Our 10-yard includes 1 ton, 15-yard includes 2 tons, and 20-yard includes 3 tons. Overage is $55/ton for 10/15yd. The 20-yard has a hard cap of 6,000 lbs (3 tons) which cannot be exceeded. Heavy materials like concrete, brick, or dirt add up fast!"
    },
    {
        keywords: ['concrete', 'brick', 'stone', 'asphalt', 'dirt', 'earth', 'sand', 'gravel', 'tile', 'pavers', 'rock', 'bowling ball', 'shingles', 'roofing'],
        answer: "That sounds like a heavy load! While our containers can hold the volume, weight adds up quickly. For example, 200 bowling balls weigh ~2,400 lbs, exceeding the 1-ton limit for a 10-yard bin. Materials like concrete or brick are 150+ lbs per cubic foot! Overage fees ($55/ton) may apply. Call us at 601-316-7891 so we can help you get the right size and avoid surprise fees."
    },
    {
        keywords: ['area', 'where', 'jackson', 'madison', 'brandon', 'clinton', 'flowood', 'pearl', 'ridgeland', 'mississippi'],
        answer: "We serve the entire tri-county area: Hinds, Madison, and Rankin counties. This includes Jackson, Brandon, Clinton, Flowood, Pearl, Ridgeland, Madison, and more!"
    },
    {
        keywords: ['same day', 'delivery', 'fast', 'quick'],
        answer: "We offer same-day delivery 7 days a week! Just call us before noon at 601-316-7891 to secure your spot."
    },
    {
        keywords: ['driveway', 'surface', 'protect', 'cracks'],
        answer: "We use a driveway protection system, placing wooden boards under the wheels to protect your concrete or asphalt. However, as per our agreement, Mid South Dumpster Rentals is not responsible for damages to surfaces, lawns, or structures unless caused by gross negligence."
    },
    {
        keywords: ['bagster', 'wm', 'bag'],
        answer: "A Bagster only holds 3 yards and can cost $200+ after pickup fees. Our 10-yard dumpster holds OVER 3 TIMES the waste for a similar total price, plus we offer easier placement!"
    },
    {
        keywords: ['book', 'reserve', 'rent', 'order', 'schedule', 'hire'],
        answer: "Ready to go? You can book online instantly [here](https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF) or call us directly at 601-316-7891."
    },
    {
        keywords: ['who', 'andrew', 'founder', 'owner', 'experience'],
        answer: "Mid South Dumpster Rentals is locally owned by Andrew Tyre. Andrew has over 7 years of experience in MS real estate and development, so he knows exactly what builders and homeowners need."
    },
    {
        keywords: ['hours', 'time', 'open', 'weekend', 'sunday', 'saturday'],
        answer: "We are open 7:00 AM – 7:00 PM, 7 days a week. Yes, that includes Saturdays and Sundays!"
    },
    {
        keywords: ['refund', 'cancel'],
        answer: "Refunds are available before delivery. If you paid by card, there is a $40 processing fee. No refunds can be issued once the dumpster is dropped on-site. Cancellations within 24 hours of delivery may incur dispatch fees."
    },
    {
        keywords: ['extension', 'extra day', 'additional day', 'keep longer', 'more time'],
        answer: "Need the dumpster longer? No problem! Extensions are $50 per additional day, subject to availability. Just give us a call before your scheduled pickup to let us know."
    },
    {
        keywords: ['missed pickup', 'blocked', 'access', 'cannot get to'],
        answer: "If access is blocked on pickup day, a Missed Pickup Fee of $150 and/or additional rental day charges may apply. Please ensure clear access!"
    },
    {
        keywords: ['overload', 'above the rim', 'tarp', 'rim'],
        answer: "Safety first! No debris is allowed above the rim. The container must be tarp-ready with end doors secured for safe transport. Overfilled containers may be refused."
    },
    {
        keywords: ['wait time', 'delay'],
        answer: "We include a 30-minute drop time. Wait time exceeding this is billed at $50/hour."
    },
    {
        keywords: ['permit', 'street', 'public', 'municipal'],
        answer: "Customers are responsible for obtaining and paying for any required municipal permits for placement of dumpsters in public areas (streets, rights-of-way)."
    },
    {
        keywords: ['placement', 'where to put', 'stable', 'legal'],
        answer: "Customers must provide a legal, stable placement location with unobstructed access for delivery and removal."
    },
    {
        keywords: ['refuse', 'unsafe', 'hazardous', 'refusal fee'],
        answer: "If a load is deemed unsafe or hazardous, we may refuse it. A Refused/Overweight Refusal Fee of $500 plus handling expenses may apply. Customers are responsible for correcting unsafe loads."
    },
    {
        keywords: ['liability', 'damage', 'lawn', 'pipe', 'structure'],
        answer: "Customer assumes all liability for any damage to surfaces, lawns, utilities, or structures unless caused by gross negligence of the Company. We take precautions like using protective boards, but our liability is limited specifically as defined in the Rental Agreement."
    },
    {
        keywords: ['payment', 'due', 'when to pay', 'past due', 'interest'],
        answer: "All fees are due upon pickup, completion of service, or invoicing. Past-due balances may incur 10% interest per month plus collection costs."
    },
    {
        keywords: ['manual handling', 'unloading'],
        answer: "If we are required to manually empty or handle material (due to overfill or prohibited items), the customer is responsible for all associated labor and equipment costs."
    },
    {
        keywords: ['legal', 'law', 'dispute', 'agreement', 'governing'],
        answer: "Our agreement is governed by the laws of the State of Mississippi, and disputes are resolved in Mississippi courts."
    }
];

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { id: 0, text: "Hi! I'm your Mid South Assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (text: string = inputValue) => {
        if (!text.trim()) return;

        const userMessage: Message = { id: Date.now(), text, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Bot Logic
        setTimeout(() => {
            const response = getBotResponse(text.toLowerCase());
            const botMessage: Message = { id: Date.now() + 1, text: response, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        }, 600);
    };

    const getBotResponse = (input: string): string => {
        // 1. Check for specific matches FIRST (e.g. extension fees, prohibited items)
        for (const item of KNOWLEDGE_BASE) {
            if (item.keywords.some(kw => input.includes(kw))) {
                return item.answer;
            }
        }

        // 2. Check for high-priority "book" trigger ONLY if no specific match was found
        if (input.includes('book') || input.includes('reserve') || input.includes('rent') || input.includes('order')) {
            return "I can definitely help with that! You can book online instantly at [this link](https://embed.survcart.com/?type=landing&co=irGaFVL6CggDRSyqIHNa&wsid=3u8ibIDlEWCk4uhSC1iS&sel=B77cgcBIlxlcSRgehUvF) or just call us at 601-316-7891.";
        }

        return "I'm not exactly sure about that, but I'd love to help! Can you try rephrasing, or just call us at 601-316-7891 to talk to Andrew directly?";
    };

    const suggestions = [
        "How much is a 15-yard?",
        "What items are prohibited?",
        "Do you serve Madison?",
        "Book Now"
    ];

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
                                    __html: msg.text.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="text-decoration: underline; color: inherit;">$1</a>')
                                }}
                            />
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className={styles.suggestions}>
                        {suggestions.map((s, i) => (
                            <button key={i} className={styles.suggestionButton} onClick={() => handleSend(s)}>
                                {s}
                            </button>
                        ))}
                    </div>

                    <form className={styles.inputArea} onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
                        <input
                            type="text"
                            placeholder="Ask a question..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button type="submit" className={styles.sendButton}>
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
