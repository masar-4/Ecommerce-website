import { useCart } from "../../../hooks/useCart";
import styles from "./AllOverlay.module.css";
export default function AllOverlay() {
  const {
    cartIsOpen,
    searchIsOpen,
    setCartIsOpen,
    setSearchIsOpen,
    menuIsOpen,
    setMenuIsOpen,
  } = useCart();
  function handleOverlayClick() {
    {
      (cartIsOpen && setCartIsOpen((cartIsOpen) => !cartIsOpen)) ||
        (searchIsOpen && setSearchIsOpen((searchIsOpen) => !searchIsOpen)) ||
        (menuIsOpen && setMenuIsOpen((menuIsOpen) => !menuIsOpen));
    }
  }

  return <div className={styles.AllOverlay} onClick={handleOverlayClick}></div>;
}
