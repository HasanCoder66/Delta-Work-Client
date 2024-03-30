import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} link="/contact" />
    </div>

    <div className={layout.sectionImg}>
      <img
        src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1711469945/branding%20hopes/card2_qxymun.png"
        alt="billing"
        className="w-[100%] h-[100%]"
      />
    </div>
  </section>
);

export default CardDeal;
