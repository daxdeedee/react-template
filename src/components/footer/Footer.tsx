import React, { memo } from 'react';
import styles from './Footer.module.css';

const Footer = memo(() => {
  return (
    <div className={styles.footer}>
      <div>Gunn's Footer</div>
    </div>
  );
});

export default Footer;
