import React from "react";
import styles from './image.module.css'

type ImageProps = {
    src: string;
    alt: string;
    size: 'large' | 'medium' | 'small'
} & React.ImgHTMLAttributes<HTMLImageElement>;

function Image({ src, alt, size, ...rest }: ImageProps) {
    const classNames = `${styles[size]}`;

    return <img className={classNames} src={src} alt={alt} {...rest} />;
}

export default Image;