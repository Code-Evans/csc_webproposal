

import styles from "./Footer.module.css"; 

export const Footer = () => {
  const heartIcon = "<3"; 
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Site Footer">
      <div className={styles.footerContent}>
        <p className={styles.footerHeading}>
          Made with {heartIcon} by Adju
        </p>
        <p className={styles.footerText}>
          All rights reserved to JRU-CSC © {currentYear}
        </p>
      </div>
    </footer>
  );
};
