import { clients } from "../constants";
import styles from "../styles";

const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter} my-8`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-44 w-28 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
