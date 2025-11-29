import styles from "./NewArrivalBar.module.css";
import twoPersons from "../../../assets/home-page/two-persons.avif";
import pinkPerson from "../../../assets/home-page/pink.avif";

export default function NewArrival() {
  return (
    <div className={styles.NewArrivalBar}>
      <div className={styles.NewArrivalText}>
        <span>
          Own The Streets
          <img src={twoPersons} alt="img" />
        </span>
        <span className="marquee-text">
          Drip In Style
          <img src={pinkPerson} alt="img" />
        </span>
        <span className="marquee-text">
          Own The Streets
          <img src={twoPersons} alt="img" />
        </span>
        <span className="marquee-text">
          Drip In Style
          <img src={pinkPerson} alt="img" />
        </span>
        <span className="marquee-text">
          Own The Streets
          <img src={twoPersons} alt="img" />
        </span>
        <span className="marquee-text">
          Drip In Style
          <img src={pinkPerson} alt="img" />
        </span>
        <span className="marquee-text">
          Own The Streets
          <img src={twoPersons} alt="img" />
        </span>
        <span className="marquee-text">
          Drip In Style
          <img src={pinkPerson} alt="img" />
        </span>
      </div>
    </div>
  );
}
