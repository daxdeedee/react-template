import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <div>About</div>
      <div>자기소개</div>
      <div>내 사진</div>
      <div>나는 어쩌구 저쩌구~~</div>

      <div>Skill</div>
      <div>JS, TS</div>
      <div>React, React-Native</div>

      <div>연락처</div>
      <div>전화번호</div>
      <div>이메일</div>
    </section>
  );
};

export default About;
