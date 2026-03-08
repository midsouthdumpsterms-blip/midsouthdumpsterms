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
        { icon: <FaCcVisa style={iconStyle} />, label: 'Visa' },
        { icon: <FaCcMastercard style={iconStyle} />, label: 'Mastercard' },
        { icon: <FaCcAmex style={iconStyle} />, label: 'American Express' },
        { icon: <FaCcDiscover style={iconStyle} />, label: 'Discover' },
        { icon: <FaApplePay style={iconStyle} />, label: 'Apple Pay' },
        { icon: <SiVenmo style={iconStyle} />, label: 'Venmo' },
        { icon: <SiCashapp style={iconStyle} />, label: 'Cash App' },
        { icon: <MdAccountBalance style={iconStyle} />, label: 'ACH/Transfer' },
        { icon: <FaCheckDouble style={iconStyle} />, label: 'Check' },
        { icon: <FaMoneyBillWave style={iconStyle} />, label: 'Cash' },
        { icon: <FaBitcoin style={iconStyle} />, label: 'Bitcoin' },
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
