import React from "react";
import {
  ContactHead,
  Footer,
  Navbar,
  AboutCard,
  ExtraCard,
  OurTeam,
} from "../components";
import styles from "../style";
import { data } from "../constants/index";
import { imageData } from "../constants/index";
import { ourTeam } from "../constants/index";
import NavTwo from "../components/NavTwo";

const AboutPage = () => {
  return (
    <div className="bg-[url('https://res.cloudinary.com/dpvxkqhi8/image/upload/v1711746467/branding%20hopes/bg_--_n3nyss.jpg')] bg-cover bg-center">
      <div className=" w-full overflow-hidden min-h-[100vh] ">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavTwo />
          </div>
        </div>
        <div className={` text-white mt-[5rem] mb-[2rem] `}>
          <ContactHead
            text="We are Block, a Digital Product Design & Branding Agency. As a team of Designers, Business Analysts,
            Strategists, Content Writers, and Project Managers, we collaborate on a result-oriented design process."
            heading="Empowering the world to design"
          />
          <div className="flex flex-wrap justify-evenly items-center ">
            {imageData.map((data) => (
              <AboutCard data={data} key={data?.id} />
            ))}
          </div>
        </div>
        <div className={`${styles.heading2} pb-2  text-center `}>Our Value</div>
        <div className="flex flex-col items-center justify-center mb-[2rem]">
          {data.map((data) => (
            <ExtraCard data={data} key={data?.id} />
          ))}
        </div>

        <div className="flex flex-wrap justify-around ">
          {ourTeam.map((data) => (
            <OurTeam data={data} key={data?.id} />
          ))}
        </div>

        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
