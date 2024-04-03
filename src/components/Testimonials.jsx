import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";
import styles from "../styles";

const Testimonials = () => {
  return (
    <section className={`${styles.flexCenter} flex-col relative`}>
      <div className="absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 z-[1] ">
        <h1 className={`${styles.heading2}`}>
          What people are <br className="sm:block hidden" /> saying about us
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p
            className={`font-dancing text-white text-2xl tracking-wide max-w-[450px] text-left`}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
            facere qui placeat ab, minus ad voluptate animi sunt? Ratione nam ut
            vel ipsam alias!
          </p>
        </div>
      </div>
      <div className="flex flex-wrap w-full justify-center sm:justify-start feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
