import React from 'react';
import {
    FaCcVisa,
    FaCcMastercard,
    FaCcAmex,
    FaCcDiscover,
    FaApplePay,
    FaBitcoin,
    FaMoneyBillWave,
    FaCheckDouble
} from 'react-icons/fa';
import { SiVenmo, SiCashapp } from 'react-icons/si';
import { MdAccountBalance } from 'react-icons/md';

const PaymentMethods: React.FC = () => {
    const iconStyle = { fontSize: '1.8rem', color: '#cbd5e1' }; // Light slate/silver look

    const payments = [
        { icon: <FaCcVisa style={iconStyle} title="Visa" />, label: 'Visa' },
        { icon: <FaCcMastercard style={iconStyle} title="Mastercard" />, label: 'Mastercard' },
        { icon: <FaCcAmex style={iconStyle} title="American Express" />, label: 'American Express' },
        { icon: <FaCcDiscover style={iconStyle} title="Discover" />, label: 'Discover' },
        { icon: <FaApplePay style={iconStyle} title="Apple Pay" />, label: 'Apple Pay' },
        { icon: <SiVenmo style={iconStyle} title="Venmo" />, label: 'Venmo' },
        { icon: <SiCashapp style={iconStyle} title="Cash App" />, label: 'Cash App' },
        { icon: <MdAccountBalance style={iconStyle} title="ACH/Transfer" />, label: 'ACH/Transfer' },
        { icon: <FaCheckDouble style={iconStyle} title="Check" />, label: 'Check' },
        { icon: <FaMoneyBillWave style={iconStyle} title="Cash" />, label: 'Cash' },
        { icon: <FaBitcoin style={iconStyle} title="Bitcoin" />, label: 'Bitcoin' },
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
            {payments.map((p, i) => (
                <div key={i} title={p.label} style={{ display: 'flex', alignItems: 'center' }}>
                    {p.icon}
                </div>
            ))}
        </div>
    );
};

export default PaymentMethods;
