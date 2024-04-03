import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" /> in few ease
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          inventore voluptate impedit ab vero qui odio velit consequatur quo
          libero quis voluptates voluptatibus suscipit reiciendis iure, nihil ex
          dolores ratione minima exercitationem assumenda aperiam eaque eos!
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-full h-full" />
      </div>
    </section>
  );
};

export default CardDeal;
