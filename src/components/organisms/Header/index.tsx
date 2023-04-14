import React from "react";
import { useHistory } from "react-router-dom";
import Image from "../../atoms/Image";
import Menu from "../../molecules/Menu";
import SearchBar from "../../molecules/SearchBar";
import styles from './header.module.css';

type HeaderProps = {
  logoSrc: string;
  logoAlt: string;
};

const Header = ({ logoSrc, logoAlt, }: HeaderProps) => {
  const history = useHistory();
  return (
    <header className={styles.header}>
      <Image size="small" src={logoSrc} alt={logoAlt} />
      <Menu />
      <SearchBar onSearch={(value) => history.push({
        pathname: '/',
        search: `?q=${value}`
      })} />
    </header>
  );
}

export default Header;