import styles from "../styles";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer hover:p-0`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-dancing font-medium text-xl leading-6">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow up"
            className="ml-2 w-6 h-6 object-contain"
          />
        </div>
        <p className="font-dancing font-medium text-xl leading-6">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
