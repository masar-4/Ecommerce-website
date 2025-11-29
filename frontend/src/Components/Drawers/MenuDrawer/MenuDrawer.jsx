import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import styles from "./MenuDrawer.module.css";
export default function MenuDrawer() {
  const { menuIsOpen, setMenuIsOpen } = useCart();
  return (
    <div
      className={`d-flex ${
        styles.allNav
      } justify-content-center align-items-center ${
        menuIsOpen ? "showDrawer" : styles.hideDrawer
      }`}
    >
      <i
        className="fa-solid fa-xmark"
        onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
      ></i>
      <ul className="list-unstyled mt-4 text-center w-100 d-flex flex-column">
        <Link
          to="/"
          className="my-3"
          onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
        >
          Home
        </Link>

        <Link
          to="/policy"
          className="my-3"
          onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
        >
          Policy
        </Link>

        <Link
          to="/allproducts"
          className="my-3"
          onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
        >
          Shop
        </Link>
      </ul>
    </div>
  );
}
