import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt="billing" className="w-full h-full z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          accusantium quibusdam explicabo, dolor fuga molestiae error rerum
          delectus vel ea aspernatur ratione, nulla tenetur? Exercitationem
          mollitia sint cum eius provident eum fugit suscipit labore. Rem.
        </p>
        <div className="flex flex-wrap mt-6 sm:mt-10">
          <img
            src={apple}
            alt="apple_store"
            className="w-32 h-11 object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-32 h-11 object-contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
