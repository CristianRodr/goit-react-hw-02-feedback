import React from 'react';
import style from "./Section.module.css"

const Section = ({ title, children }) => (
  <section className={style.title}>
    {title}
    {children}
  </section>
);

export default Section;
