import { Link } from "react-router-dom";
import logo from "../../../assets/deckedout-logo.webp";
import styles from "./MainNav.Module.css";
import { useCart } from "../../../hooks/useCart";
export default function MainNav() {
  return (
    <nav className={`${styles.MainNav} py-4 MainNav`}>
      <div className="container">
        <div className="wrapper row gap-lg-0 gap-md-3 justify-content-around justify-content-md-start">
          <LeftNav />
          <NavLogo />
          <RightNav />
        </div>
      </div>
    </nav>
  );
}
function LeftNav() {
  const { setMenuIsOpen } = useCart();
  return (
    <>
      <ul className="leftNav d-none d-md-flex col-3 col-lg-3 col-xl-2 nav gap-0 justify-content-between align-items-center">
        <li className="d-flex align-items-end">
          <Link to="/">Home</Link>
        </li>
        <li className="d-flex align-items-end">
          <Link to="/policy">Policy</Link>
        </li>

        <li className="dropdown d-flex align-items-end">
          <Link to="/allproducts">
            Shop <i className="fa-solid fa-angle-down"></i>
          </Link>
          <div className={`menu ${styles.menu}`}>
            <ul className={`nav flex-column`}>
              <Link to="/tees">
                <li>
                  <span>tees</span>
                </li>
              </Link>
              <Link to="/denim">
                <li>
                  <span>Denim</span>
                </li>
              </Link>
            </ul>
          </div>
        </li>
      </ul>
      <ul className="leftNav d-block d-md-none col-1 col-lg-3 col-xl-2 nav ms-1">
        <li>
          <i
            className="fa-solid fa-bars"
            onClick={() => setMenuIsOpen((menuIsOpen) => !menuIsOpen)}
          ></i>
        </li>
      </ul>
    </>
  );
}
function NavLogo() {
  return (
    <div className="logo col-5 col-md-4 col-lg-7 col-xl-8 d-flex justify-content-end justify-content-lg-center align-items-center">
      <Link to="/">
        <img src={logo} alt="deckedout-logo" />
      </Link>
    </div>
  );
}
function RightNav() {
  const { setCartIsOpen, setSearchIsOpen, noCartProducts } = useCart();
  return (
    <ul className="right-nav col-3 col-md-4 col-lg-2 nav justify-content-end gap-5 align-items-center">
      <li>
        <i
          className="fa-solid fa-magnifying-glass"
          onClick={() => setSearchIsOpen((searchIsOpen) => !searchIsOpen)}
        ></i>
      </li>
      <li
        className="cart"
        onClick={() => setCartIsOpen((cartIsOpen) => !cartIsOpen)}
      >
        <i className="fa-solid fa-cart-shopping"></i>
        <span className="cart-counter">{noCartProducts}</span>
      </li>
    </ul>
  );
}
