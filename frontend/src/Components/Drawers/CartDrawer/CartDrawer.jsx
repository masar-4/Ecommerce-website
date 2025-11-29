import styles from "./CartDrawer.module.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { useEffect, useState } from "react";

export default function CartDrawer() {
  const { cartIsOpen, setCartIsOpen, cartProducts } = useCart();
  const noCartProducts = cartProducts.length;

  return (
    <div
      className={`${styles.CartDrawer} ${
        cartIsOpen ? "showDrawer" : "hideDrawer"
      }`}
    >
      <div className="container">
        <div
          className={`${styles.CartHeader} d-flex justify-content-between mt-4`}
        >
          <h4 className="text-uppercase">cart</h4>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setCartIsOpen((cartIsOpen) => !cartIsOpen)}
          ></i>
        </div>
        {/* initial cart */}
        {noCartProducts === 0 ? <InitialCart /> : <AllCartProducts />}
      </div>
    </div>
  );
}
function InitialCart() {
  const { cartIsOpen, setCartIsOpen } = useCart();
  return (
    <div
      className={`${styles.InitialCart} d-flex flex-column align-items-center gap-3`}
    >
      <i className="fa-solid fa-cart-shopping"></i>
      <p className="text-center">Your cart is empty</p>
      <Link
        to="/allproducts"
        className="text-uppercase"
        onClick={() => setCartIsOpen(!cartIsOpen)}
      >
        <button>
          <Link to="/allproducts">start shopping</Link>
        </button>
      </Link>
    </div>
  );
}
function AllCartProducts() {
  const { cartProducts, setCartIsOpen, TotalCheckOut } = useCart();
  return (
    <div className={`${styles.CartWrapper} row justify-content-between`}>
      <div className="cart-products">
        <div className="wrapper row mb-3 align-items-center gap-2">
          {cartProducts.length > 0 &&
            cartProducts.map((eachProduct) => (
              <EachCartProduct
                eachProduct={eachProduct}
                key={eachProduct._id}
              />
            ))}
        </div>
      </div>
      <div
        className={`${styles.CheckOutSection} d-flex flex-column align-items-center gap-3 justify-content-end`}
      >
        <span className="text-capitalize">
          tax included and shipping calculated at checkout
        </span>
        <div className="checkout-button">
          <Link
            to="/checkout"
            onClick={() => setCartIsOpen((cartIsOpen) => !cartIsOpen)}
          >
            <button className="text-uppercase d-flex align-items-center gap-2">
              <span>checkout</span> <i className="fa-solid fa-circle"></i>
              <span>LE {TotalCheckOut}</span>
            </button>
          </Link>
        </div>
        <Link
          to="/cart"
          className={`text-uppercase ${styles.ViewCart}`}
          onClick={() => setCartIsOpen((cartIsOpen) => !cartIsOpen)}
        >
          view cart
        </Link>
      </div>
    </div>
  );
}
function EachCartProduct({ eachProduct }) {
  const { onHandleTrashClick, handleUpdateCounter, setCartIsOpen } = useCart();
  const [counter, setCounter] = useState(eachProduct.counter);

  useEffect(() => {
    setCounter(eachProduct.counter);
  }, [eachProduct.counter]);

  function handleAddCounter(eachProduct) {
    if (counter >= 1 && counter < 20) {
      const newCounter = counter + 1;
      setCounter(newCounter);
      handleUpdateCounter(eachProduct.id, newCounter, eachProduct.selectedSize);
    }
  }

  function handleMinusCounter(eachProduct) {
    if (counter > 1 && counter <= 20) {
      const newCounter = counter - 1;
      setCounter(newCounter);
      handleUpdateCounter(eachProduct.id, newCounter, eachProduct.selectedSize);
    }
  }
  return (
    <>
      <div className={`${styles.CartProductImg} col-3`}>
        <img src={eachProduct.img} alt="" className="img-fluid" />
      </div>
      <div
        className={`${styles.CartPrdouctDetails} col-6 row align-items-center gap-4`}
      >
        <div className={styles.productNameSize}>
          <Link
            to={`/product/${eachProduct.id}`}
            onClick={() => setCartIsOpen((cartIsOpen) => !cartIsOpen)}
          >
            <h6>{eachProduct.name}</h6>
          </Link>
          <span>{eachProduct.selectedSize}</span>
        </div>

        <div className="product-counter d-flex gap-4 align-items-center">
          <div className="counter d-flex gap-4 align-items-center">
            <i
              className="fa-solid fa-minus"
              onClick={() => handleMinusCounter(eachProduct)}
            ></i>
            <span>{eachProduct.counter}</span>
            <i
              className="fa-solid fa-plus"
              onClick={() => handleAddCounter(eachProduct)}
            ></i>
          </div>
          <div className="detlete-product">
            <i
              className={`fa-solid fa-trash pb-1 ${styles.TrashIcon}`}
              onClick={() =>
                onHandleTrashClick(eachProduct.id, eachProduct.selectedSize)
              }
            ></i>
          </div>
        </div>
      </div>
      <div className="product-price col-3">
        <p>{eachProduct.totalProductPrice} LE</p>
      </div>
    </>
  );
}
