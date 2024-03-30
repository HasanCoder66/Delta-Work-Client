import styles, { layout } from "../style";

const Billing = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1711753629/branding%20hopes/card-bill-3_pedlk6.png"
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
       Streamline your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
    </div>
  </section>
);

export default Billing;
