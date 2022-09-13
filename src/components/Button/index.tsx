import React from 'react'
import './Button.scss'

const Button = ({ type="primary", children, onClick }: ButtonProps) => {
    return (
        <button 
            onClick={onClick} 
            className={`btn ${type === 'danger' ? 'btn--danger' : 'btn--primary'}`}
        >
            {children}
        </button>
    )
}

export default Button

interface ButtonProps {
    type?: ButtonType;
    children?: React.ReactNode;
    onClick?: () => void;
}

type ButtonType = 'primary' | 'danger' 
