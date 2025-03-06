import React from "react";
import { Hero } from "../components/Hero/Hero";
import { Recents } from "../components/Recent/Recents";
import Calendar from "../components/EventCalendar/EventCalendar";
import { Execs } from "../components/Execs/Execs";
import Contact from "../components/Contact/Contact";
import Title from "../components/Title/Title";

const Home = () => {
  return (
    <>

      <Hero />


      <Section 
        subtitle="Latest Updates" 
        title="Rizalian Post"
        component={<Recents />}
      />

 
      <Section 
        subtitle="Explore What's in Store for You" 
        title="Upcoming Events"
        component={<Calendar />}
      />

      <Section 
        subtitle="Central Student Council" 
        title="Executive Officers"
        component={<Execs />}
      />


      <Section 
        subtitle="Contact Us" 
        title="Get in Touch"
        component={<Contact />}
      />
    </>
  );
};

const Section = ({ subtitle, title, component }) => (
  <div>
    <Title subTitle={subtitle} title={title} />
    {component}
  </div>
);

export default Home;
