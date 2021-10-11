import React from 'react';
import styles from './Button.module.css'

export default function (props) {
  const { label, onClick, disabled} = props;
  return (
    <button className={styles.button} onClick={onClick} disabled={disabled}>
          {label}
    </button>
  );
}