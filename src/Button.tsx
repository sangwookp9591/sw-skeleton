import React from 'react';

export interface ButtonProps {
    children: React.ReactNode;
    label?: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, label, onClick, disabled = false, variant = 'primary' }) => {
    const style = {
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        cursor: disabled ? 'not-allowed' : 'pointer',
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
    };

    return (
        <button style={style} onClick={onClick} disabled={disabled}>
            {label}
            {children}
        </button>
    );
};
