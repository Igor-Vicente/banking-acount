import { stats } from "../constants";
import styles from "../styles";

const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex-wrap mb-6 sm:mb-20`}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 justify-start items-center flex m-3`}
        >
          <h4 className="font-dancing font-bold tracking-widest text-[30px] leading-[43px] xs:text-[40px] xs:leading-[53px] text-white">
            {stat.value}
          </h4>
          <p className="font-dancing font-normal text-[16px] leading-[22px] xs:text-[24px] xs:leading-[30px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
