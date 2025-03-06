import React from "react";
import Slider from "react-slick"; 
import styles from "./Execs.module.css";
import { getImageUrl } from "../../utils";
import execs from "../../data/executives.json";

const ExecCard = ({ exec }) => {
  return (
    <div className={styles.execCard}>
      <img 
        src={getImageUrl(exec.imageSrc)} 
        alt={`Profile of ${exec.name}`} 
        className={styles.execImage} 
      />
      <h3 className={styles.execName}>{exec.name}</h3>
      <p className={styles.execPosition}>{exec.Position}</p>
    </div>
  );
};

export const Execs = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section className={styles.container}>
      <Slider {...settings} className={styles.execs}>
        {execs.map((exec, id) => (
          <ExecCard key={id} exec={exec} />
        ))}
      </Slider>
    </section>
  );
};
