import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./RecentCard.module.css";

export const RecentCard = ({ recent: { title, imageSrc, description, tags, source } }) => {
  return (
    <div className={styles.card} id = "members">
      <img
        className={styles.image}
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
      />
      
      <p className={styles.description}>{description}</p>
      
      <ul className={styles.tags}>
        {tags.map((tag, id) => (
          <li key={id} className={styles.tag}>
            {tag}
          </li>
        ))}
      </ul>
      
      <div className={styles.links}>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </div>
    </div>
  );
};
