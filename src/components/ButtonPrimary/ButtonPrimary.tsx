import React, { FC } from 'react';
import styles from './ButtonPrimary.module.scss';

type ButtonProps = {
  title: string;
  onClick?: () => void;
}

const ButtonPrimary:FC<ButtonProps> = ({ title, onClick }) => (
  <button
    className={styles.button}
    onClick={onClick}
  >
    {title}
  </button>
);

export default ButtonPrimary;
