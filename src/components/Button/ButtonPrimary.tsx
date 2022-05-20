import React, { FC } from 'react';
import styles from './ButtonPrimary.module.scss';

type ButtonProps = {
  title: string
  onClick: () => void
  disabled?: boolean;
}

const ButtonPrimary:FC<ButtonProps> = ({ title, onClick, disabled }) => (
  <button
    className={styles.button}
    onClick={onClick}
    disabled={disabled}
  >
    {title}
  </button>
);

export default ButtonPrimary;
