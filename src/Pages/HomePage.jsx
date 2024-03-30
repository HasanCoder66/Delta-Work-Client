import React from "react";
import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Footer,
  Hero,
  Navbar,
  ServicesCarousel,
  Stats,
  Testimonials,
} from "../components";

import styles from "../style.js";
const HomePage = () => {
  return (
    <div className=" w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div
        className={`bg-[url("https://res.cloudinary.com/dpvxkqhi8/image/upload/v1711753636/branding%20hopes/hero3_nm0pco.png")] h-[82.5vh] bg-cover bg-center  ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-[url('https://res.cloudinary.com/dpvxkqhi8/image/upload/v1711746467/branding%20hopes/bg_--_n3nyss.jpg')] bg-cover bg-center ${styles.paddingX} ${styles.flexCenter}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <ServicesCarousel />
          <CardDeal />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
