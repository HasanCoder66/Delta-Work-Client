import React from "react";
import styles from "../style";
import { Footer, Navbar } from "../components";
import { Contact, ContactHead } from "../components";
import NavTwo from "../components/NavTwo";
// import

const ContactPage = () => {
  return (
    <div className="  w-full overflow-hidden min-h-[100vh] bg-[url('https://res.cloudinary.com/dpvxkqhi8/image/upload/v1711746467/branding%20hopes/bg_--_n3nyss.jpg')] bg-cover bg-center">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavTwo />
        </div>
      </div>
      <div className={` text-white ${styles.paddingX} `}>
        <ContactHead
          text="Please reach out to us if you have questions about our enterprise offerings, or anything else."
          heading="Contact Us"
        />
        <div>
          <Contact />
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
