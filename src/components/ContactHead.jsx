import React from "react";
import styles from "../style";
const ContactHead = ({ text, heading }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mb-[3rem] ">
        <h1 className={`font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full text-center  `}>{heading}</h1>
        <p className={`${styles.paragraph} text-center`}>{text}</p>
      </div>
    </div>
  );
};

export default ContactHead;
