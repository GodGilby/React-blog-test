import React from 'react';
import { FaEdit } from 'react-icons/fa';
import Button from '../Button';
import styles from './iconbutton.module.css';

interface IconButtonProps {
  onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick }) => {
  return (
    <Button className={styles.iconButton} onClick={onClick}>
      <FaEdit />
    </Button>
  );
};

export default IconButton;