

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "../components/index";
import styles from "../style.js";
import '../Pages/Contact.css'
export default function ServicesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" m-auto   " id="services">
      <div className="mt-20 ">
        <Slider {...settings} className=" rounded-[20px] box-shadow  gap-5 ">
          <div className="w-[100%] mb-[2rem] ">
            <img
              src="https://deltabusiness.io/Services/AI%20&%20Automation.jpg"
              alt="AI & Automation"
              className="mb-[1rem]"
            />
            <h1 className="text-black font-poppins font-semibold text-center">
              AI & Automation
            </h1>
            <p className={` mb-[1rem] p-[20px] h-[320px] ${styles.paragraph}`}>
              Experience streamlined operations and heightened productivity with
              our cutting-edge AI and automation solutions. From optimizing
              supply chains to enhancing customer service, we specialize in
              tailoring innovations to suit your business needs. Let us propel
              your business forward in the digital age.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          <div>
            <img
              src="https://deltabusiness.io/Services/Artboard%202%20copy%202-100.jpg"
              alt="Artboard"
              className="mb-[1rem]"
            />
            <h1 className="text-black font-poppins font-semibold text-center">
              Artboard
            </h1>
            <p
              className={` mb-[1rem] p-[20px] h-[320px] font-poppins overflow-hidden${styles.paragraph}`}
            >
              Elevate your visual communication with our professional artboard
              design services. At Delta Business Solution, we specialize in
              creating stunning and impactful artboards tailored to your
              specific needs. Whether you're designing presentations, marketing
              materials, or prototypes, our expert team ensures top-notch
              quality and attention to detail. Let us bring your ideas to life
              with creativity and precision.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          <div>
            <img
              src="https://deltabusiness.io/Services/Business%20Planning.jpg"
              alt="Business Planning"
              className="mb-[1rem]"
            />
            <h1 className="text-black font-poppins font-semibold text-center">
              Business Planning
            </h1>
            <p className={` mb-[1rem] p-[20px] h-[320px] ${styles.paragraph}`}>
              Crafting a roadmap for success is effortless with our tailored
              business planning services. Let us guide you towards your goals
              with precision and efficiency.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          <div>
            <img
              src="https://deltabusiness.io/Services/Consultant%20Service.jpg"
              alt="Consultant Service"
              className="mb-[1rem]"
            />
            <h1 className="text-black font-poppins font-semibold text-center">
              Consultant Service
            </h1>
            <p className={` mb-[1rem] p-[20px] h-[320px] ${styles.paragraph}`}>
              Unlock the full potential of your business with Delta Business
              Solution's expert consulting services. Our seasoned consultants
              bring a wealth of industry knowledge and practical experience to
              the table, providing personalized strategies to address your
              unique challenges and capitalize on opportunities.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          <div>
            <img
              src="https://deltabusiness.io/Services/Content%20Creation.jpg"
              alt="Content Creation"
              className="mb-[1rem]"
            />
            <h1 className="text-black font-poppins font-semibold text-center">
              Content Creation
            </h1>
            <p className={` mb-[1rem] p-[20px] h-[320px] ${styles.paragraph}`}>
              Let Delta Business Solution take your content to new heights with
              our exceptional content creation services. From captivating copy
              to engaging multimedia, our team of creative professionals is
              dedicated to crafting content that resonates with your audience
              and achieves your business objectives.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          <div>
            <img
              src="https://deltabusiness.io/Services/E-Commerce.jpg"
              alt="E-Commerce"
              className="mb-[1rem]"
            />
            <h1 className="text-black font-poppins font-semibold text-center">
              E-Commerce
            </h1>
            <p className={` mb-[1rem] p-[20px] h-[320px] ${styles.paragraph}`}>
              Step into the digital marketplace with confidence, supported by
              Delta Business Solution's comprehensive e-commerce services. Our
              team specializes in creating tailored solutions to help you thrive
              in the competitive world of online retail.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          <div>
            <img
              src="https://deltabusiness.io/Services/General%20Sales.jpg"
              alt="General Sales"
              className="mb-[1rem]"
            />
            <h1 className="text-black font-poppins font-semibold text-center">
              General Sales
            </h1>
            <p className={` mb-[1rem] p-[20px] h-[320px] ${styles.paragraph}`}>
              Transform your sales strategy and drive revenue growth with Delta
              Business Solution's expert sales services. Our seasoned
              professionals specialize in analyzing market trends, identifying
              target audiences, and implementing effective sales techniques to
              maximize your business's profitability.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          <div>
            <img
              src="https://deltabusiness.io/Services/Marketing.jpg"
              alt="Marketing"
              className="mb-[1rem]"
            />
            <h1 className="text-black font-poppins font-semibold text-center">
              Marketing
            </h1>
            <p className={` mb-[1rem] p-[20px] h-[320px] ${styles.paragraph}`}>
              Experience the power of strategic marketing with Delta Business
              Solution. Our dedicated team of marketing specialists is committed
              to crafting innovative campaigns that captivate audiences, drive
              engagement, and ultimately, boost your bottom line.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          <div>
            <img
              src="https://deltabusiness.io/Services/Project%20Management.jpg"
              alt="Project Management"
              className="mb-[1rem]"
            />
            <h1 className="text-black font-poppins font-semibold text-center">
              Project Management
            </h1>
            <p className={` mb-[1rem] p-[20px] h-[320px] ${styles.paragraph}`}>
              Simplify your project journey and ensure success with Delta
              Business Solution's expert project management services. Our
              seasoned professionals bring a wealth of experience to the table,
              overseeing every aspect of your project from initiation to
              completion.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
          <div>
            <img
              src="https://deltabusiness.io/Services/Software%20on-Boarding.jpg"
              alt="Software on-Boarding"
              className="mb-[1rem]"
            />
            <h1 className="text-black font-poppins font-semibold text-center">
              Software on-Boarding
            </h1>
            <p className={` mb-[1rem] p-[20px] h-[320px] ${styles.paragraph}`}>
              Embark on a smooth transition to new software solutions with Delta
              Business Solution's specialized onboarding services. Our tailored
              approach ensures that your team adopts the software seamlessly,
              minimizing disruptions and maximizing productivity.
            </p>

            <div className="flex justify-center">
              <Button link="/contact" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
