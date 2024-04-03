import styles from "../styles";
import { GetStarted } from "../components";
import { robot, discount } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}>
        <div className="flex items-center py-[6px] bg-discount-gradient rounded-lg mb-2">
          <img
            src={discount}
            alt="discount"
            className="w-8 h-8 object-contain"
          />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> Discount For
            <span className="text-white"> 1 Month</span>
            <span className=""> Account</span>
          </p>
        </div>
        <div className="flex w-full justify-between items-center">
          <h1 className="text-5xl flex-1 font-dancing font-semibold ss:text-[72px] ss:leading-[100px] leading-[75px] text-white">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-dancing font-semibold text-4xl ss:text-[68px] ss:leading-[100px] leading-[75px] text-white w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ea
          accusamus eos animi corporis nemo veniam aliquam? Molestiae iste
          cumque quia enim. Impedit, quae.
        </p>
      </div>
      <div
        className={`${styles.flexCenter} flex-1 flex md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-full h-full relative z-10"
        />
        <div className="absolute z-0 w-[40%] h-[40%] top-0 pink__gradient" />
        <div className="absolute z-1 w-[80%] h-[80%] bottom-40 rounded-full white__gradient" />
        <div className="absolute z-0 w-[50%] h-[50%] bottom-20 right-20 blue__gradient" />
      </div>
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
