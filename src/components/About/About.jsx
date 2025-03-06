import React, { useState } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <img
          className={styles.aboutImage}
          src={getImageUrl("orgPhotos/csc_photos/cscexecgrp.jpg")}
          alt="CSC Group Photo #1"
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
                <div>
                <h3>Welcome to the Central Student Council's official website!</h3>
                <p>
                    We are the heart of student leadership, embodying the core values of <strong>Talino</strong> , <strong>Talento</strong> ,
                    <strong>Tatag</strong>, and <strong>Taos-puso</strong>
                    . Guided by these principles, we strive to create a vibrant
                    and inclusive community that uplifts every student and inspires meaningful
                    change.
                </p>
             
                <h4><strong>Join us in shaping our community, one step at a time.</strong></h4>
                </div>
            </li>
        </ul>
      </div>
    </section>
  );
};
