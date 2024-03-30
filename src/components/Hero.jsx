import styles from "../style";

import Button from "./Button";

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col static  ${styles.paddingY}`}
  >
    <div className="static h-screen">
      <div className="absolute bottom-0 left-0 w-full flex flex-col items-center ">
        <Button text="Explore More" link="/contact" />
        <p
          className={`font-poppins font-normal text-[18px] leading-[30.8px] text-white text-center pb-[4rem] `}
        >
          Delta Management offers innovative solutions for your projects.{" "}
          <br className="sm:block hidden" /> Rely on our expertise to bring your
          vision to life swiftly.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;

