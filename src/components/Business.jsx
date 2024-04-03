import { features } from "../constants";
import styles, { layout } from "../styles";
import { Button } from "../components";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] feature-card ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    }`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-dancing text-white text-2xl font-bold mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-lg">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden" /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          nemo, eius libero earum repellendus ut ullam ea. Expedita ab molestiae
          et officiis ullam sequi! Fugiat soluta magni velit ratione natus,
          molestiae aperiam eius sint modi a.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
