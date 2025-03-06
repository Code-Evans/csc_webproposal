import React from "react";
import Slider from "react-slick"; 
import styles from "./Recents.module.css";
import recents from "../../data/recents.json";

import { RecentCard } from "./RecentCard";

export const Recents = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 3, 
    autoplay: true, 
    autoplaySpeed: 5000, 
    pauseOnHover: true,
   
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, 
        },
      },
    ],
  };

  return (
    <section className={styles.container}>
      <Slider {...settings} className={styles.recents}>
        {recents.map((recent, id) => (
          <RecentCard key={id} recent={recent} />
        ))}
      </Slider>
    </section>
  );
};
