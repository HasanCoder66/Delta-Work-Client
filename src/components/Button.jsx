import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, styles, link, styleClass }) => {
  return (
    <Link to={link}>
      <button
        type="button"
        className={`py-4 px-6 bg-slate-800 
    font-poppins font-medium text-[18px] text-white outline-none rounded-[12px] ${styles}`}
      >
        {text ? text : "Get Started"}
      </button>
    </Link>
  );
};

export default Button;
