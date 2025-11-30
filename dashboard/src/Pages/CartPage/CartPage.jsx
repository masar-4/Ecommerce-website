import styles from "./CartPage.module.css";
import AnnouncementBar from "../../Components/Marquee/AnnouncementBar/AnnouncementBar";
import Footer from "../../Components/Footer/MainFooter/MainFooter";
import SeconderyNav from "../../Components/NavBar/SeconderyNav/SeconderyNav";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

export default function CartPage() {
  const { noCartProducts } = useCart();
  return (
    <>
      <header>
        <AnnouncementBar />
        <SeconderyNav />
      </header>
      <main className={styles.cartPage}>
        <div className="container">
          <div className="wrapper row gap-3">
            {noCartProducts === 0 ? <InitialCart /> : <CartProducts />}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
function InitialCart() {
  return (
    <div
      className={`${styles.cartEmpty} d-flex flex-column align-items-center py-5 my-5`}
    >
      <h1>Your cart is empty</h1>
      <p>Ready to find your next favorite?</p>
      <Link to="/allproducts" className="text-uppercase start-shopping">
        <button>start shopping</button>
      </Link>
    </div>
  );
}
function CartProducts() {
  const { TotalCheckOut, cartProducts } = useCart();
  return (
    <>
      <div className="cart-title py-4">
        <h1 className="text-capitalize text-center p-4 fw-bold">your cart</h1>
      </div>
      <div
        className={`${styles.tableHead} d-flex d-flex justify-content-between`}
      >
        <p className="text-uppercase">product</p>
        <p className="text-uppercase">quantity</p>
        <p className="text-uppercase">total</p>
      </div>
      {cartProducts.length > 0 &&
        cartProducts.map((eachProduct) => (
          <EachCartProduct key={eachProduct.id} eachProduct={eachProduct} />
        ))}

      <div
        className={`${styles.checkoutSection} d-flex justify-content-between align-items-center pb-5`}
      >
        <Link
          to="/allproducts"
          className={`${styles.continueShopping} text-capitalize`}
        >
          continue shopping
        </Link>
        <div className="checkout-btn d-flex flex-column-reverse justify-content-center align-items-center gap-4">
          <span className="text-capitalize">
            tax included and shipping calculated at checkout
          </span>
          <div className="checkout-button">
            <Link
              to="/checkout"
              className="text-uppercase d-flex align-items-center gap-2"
            >
              <button className="d-flex justify-content-center">
                <span>checkout</span> <i className="fa-solid fa-circle"></i>
                <span>LE {TotalCheckOut}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
function EachCartProduct({ eachProduct }) {
  const { onHandleTrashClick, handleUpdateCounter } = useCart();
  const [counter, setCounter] = useState(eachProduct.counter);
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
  const id = eachProduct.id;

  return (
    <div className="cart-page-product py-4">
      <div className="table-content">
        <div className="wrapper row align-items-center">
          <div
            className={`${styles.cartProductImg} col-5 col-md-5 d-flex gap-3 align-items-center`}
          >
            <img src={eachProduct.img} alt="" className="img-fluid" />
            <div className={styles.productNameSize}>
              <h6>
                <Link to={`/product/${id}`}>{eachProduct.name}</Link>
              </h6>
              <span>{eachProduct.selectedSize}</span>
            </div>
          </div>

          <div className={`${styles.productCounter} col-4 col-md-4 col-lg-3 d-flex gap-3 gap-md-4 align-items-center justify-content-end justify-content-md-center`}>
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
                className={`fa-solid fa-trash pb-1 ${styles.trashIcon}`}
                onClick={() => onHandleTrashClick(eachProduct.id,eachProduct.selectedSize)}
              ></i>
            </div>
          </div>

          <div className="product-price col-3 col-md-3 col-lg-4 d-flex justify-content-end">
            <p>LE {eachProduct.totalProductPrice}</p>
          </div>
        </div>
      </div>
      <div className="table-end"></div>
    </div>
  );
}
