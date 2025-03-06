import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content} id = "hero" >
        <h1 className={styles.title}>Empowering Students, Building Leaders</h1>
        <p className={styles.description}>
            Explore resources, events, and opportunities to make your student life extraordinary.
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>Contact Us</a>
      </div>
      <img
        className={styles.heroLogo}
        src={getImageUrl("nav/csclogo.png")}
        alt="CSC Logo"
     />
     <div className={styles.topBlur}/>
     <div className={styles.bottomBlur}/>
    </section>
  );
};
