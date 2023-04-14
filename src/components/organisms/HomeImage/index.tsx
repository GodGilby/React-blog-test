import React from "react";
import Image from "../../atoms/Image";
import styles from './homeimage.module.css';

const HomeImage = () => (
    <div className={styles.container}>
        <Image size="large" src="https://elcomercio.pe/resizer/a2VbuT-LvcYEZY1DwWkKZhGEJC0=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ILC4QLNQNVG6PFNT5ZFL5IFKGA.jpg" alt="home-image"></Image>
    </div>
)

export default HomeImage;