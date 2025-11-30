import { Link } from "react-router-dom";
import styles from "./ShopNowBtn.Module.css";
export default function ShowNowBtn() {
  return (
    <div className={styles.shopNow}>
      <Link to={"allproducts"}>
        <button className="shopNow">Shop Now</button>
      </Link>
    </div>
  );
}
