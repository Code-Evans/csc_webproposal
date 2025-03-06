import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { Recents } from "./components/Recent/Recents";
import { Execs } from "./components/Execs/Execs";
import  Contact   from "./components/Contact/Contact";
import  Orgs   from "./components/orgs/orgs";
import  Calendar   from "./components/EventCalendar/EventCalendar";
import { Footer } from "./components/Footer/Footer";
import Title from "./components/Title/Title"; 




function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.Appcontent}>
        <Hero />
        <About />
        <div>

          <Title subTitle="Latest Updates" title="Rizalian Post" />
          <Recents /> 
          <Title subTitle="Explore What's in Store for You" title="Upcoming Events" />
          <Calendar />

          <Title subTitle="Want to get involved?" title="Rizalian Organizations" />
          <Orgs />
          <Title subTitle="Central Student Council" title="Executive Officers" />
          <Execs />

          <Title subTitle="Contact Us" title="Get in Touch" />
          

          
        </div>

        <Contact />

        
      </div>
      
      <Footer />
    </div>
    
  );
}

export default App;
