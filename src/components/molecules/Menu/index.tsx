import React from "react";
import { MENU_ITEMS } from "../../../utils/utils";
import Button from "../../atoms/Button";
import styles from './menu.module.css';
import { useHistory, withRouter } from "react-router-dom";

const Menu: React.FC = () => {
    const history = useHistory();

    function handleClick(path: string) {
        history.push(path);
    }

    return (
        <div className={styles.menu}>
            {MENU_ITEMS.map((item, index) => {
                return (
                    <Button onClick={() => handleClick(item.path)} key={index} className="menu-item" >{item.title}</Button>
                )
            })}
        </div>
    )
}

export default withRouter(Menu);