import React from "react";
import styles from './text.module.css';

type TextProps = {
    children: React.ReactNode;
    type: "menu" | "description" | "title";
} & React.HTMLAttributes<HTMLParagraphElement>;

function Text({ children, type, ...rest }: TextProps) {

    const classNames = `${styles[type]}`;

    return <p className={classNames}>{children}</p>;
}

export default Text;

