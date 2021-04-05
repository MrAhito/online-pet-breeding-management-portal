import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--prime', 'btn--out', 'loginBtn'];

const SIZES = ['btn--med', 'btn--large', 'btn-login', 'reg-size'];

export const Button = ({
    children,
    type,
    to,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to={to} className='btn-mobile'>
            <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};
