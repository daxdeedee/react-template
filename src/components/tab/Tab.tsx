import React from 'react';
import styles from './Tab.module.css';
import { ITab } from '../../types/tab';

const Tab = ({ title, onClick, isSelected = false }: ITab) => {
  return (
    <button
      className={`${styles.tab} ${isSelected ? styles.tabOn : styles.tabOff}`}
      onClick={() => {
        onClick();
      }}>
      <div>{title}</div>
    </button>
  );
};

export default Tab;
