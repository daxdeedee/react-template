import React, { memo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Nav.module.css';
import Tab from '../tab/Tab';

const Navigation = memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className={styles.continer}>
      <div className={styles.nav}>
        <div>Gunn Portfolio</div>
      </div>
      <div className={styles.nav}>
        <Tab
          title="Careers"
          onClick={() => {
            navigate('/');
          }}
          isSelected={'/' === location?.pathname}
        />
        <Tab
          title="About"
          onClick={() => {
            navigate('/about');
          }}
          isSelected={'/about' === `${location?.pathname}`}
        />

        <Tab title="Github" onClick={() => {}} />
        <Tab title="Instagram" onClick={() => {}} />
        <Tab title="LinkedIn" onClick={() => {}} />
      </div>
    </nav>
  );
});

export default Navigation;
