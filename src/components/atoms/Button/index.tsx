import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button = ({ onClick, children, className }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${className ?? ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;