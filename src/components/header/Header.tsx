import React, { memo } from 'react';
import Navigation from '../nav/Navigation';
import styles from './Header.module.css';

const Header = memo(() => {
  return (
    <div className={styles.header}>
      <Navigation />
    </div>
  );
});

export default Header;
