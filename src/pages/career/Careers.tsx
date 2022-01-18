import React from 'react';
import BusinessCard from './BusinessCard';
import styles from './Careers.module.css';

const Careers = () => {
  return (
    <section className={styles.careers}>
      <div>Careers</div>
      <BusinessCard />
      <BusinessCard />
      <BusinessCard />
      <BusinessCard />
    </section>
  );
};

export default Careers;
