import React, { FC } from 'react';
import styles from './ButtonSecondary.module.scss';

type ButtonSecondaryProps = {
  title: string;
  onClick?: () => void;
}

const ButtonSecondary:FC<ButtonSecondaryProps> = ({
  title, onClick,
}) => (
  <button
    className={styles.button}
    onClick={onClick}
  >
    {title}
  </button>
);

export default ButtonSecondary;
