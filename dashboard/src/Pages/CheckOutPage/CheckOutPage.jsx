import styles from "./CheckOutPage.module.css";
import logo from "../../assets/deckedout-logo.webp";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useState } from "react";

export default function CheckOutPage() {
  const [isOpen, setIsOpen] = useState(false);
  const SHIPPING_VALUE = 110;
  const [checkout, setCheckout] = useState(() => {
    try {
      const saved = localStorage.getItem("checkout");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const handlePayNow = (e) => {
    e.preventDefault();
    localStorage.setItem("checkout", JSON.stringify(checkout));
    console.log(JSON.parse(localStorage.getItem("checkout")));
  };

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <MainContent
        SHIPPING_VALUE={SHIPPING_VALUE}
        isOpen={isOpen}
        setCheckout={setCheckout}
        checkout={checkout}
        onHandlePayNow={handlePayNow}
      />
    </>
  );
}
function Header({ setIsOpen }) {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div
            className={styles.cartIcon}
            onClick={() => setIsOpen((isOpen) => !isOpen)}
          >
            🛒
          </div>
        </div>
      </div>
    </div>
  );
}
function MainContent({
  SHIPPING_VALUE,
  isOpen,
  setCheckout,
  checkout,
  onHandlePayNow,
}) {
  return (
    <div className={styles.mainContainer}>
      <div className="row">
        {/* <!-- Checkout Form --> */}
        <div className="col-12 order-2 order-md-1 col-md-7">
          <form className={styles.checkoutForm}>
            <ContactSection setCheckout={setCheckout} checkout={checkout} />
            <DeliverySection checkout={checkout} setCheckout={setCheckout} />
            <ShippingMethod
              SHIPPING_VALUE={SHIPPING_VALUE}
              checkout={checkout}
              setCheckout={setCheckout}
            />
            <PaymentSection checkout={checkout} setCheckout={setCheckout} />
            {/* <!-- Pay Button --> */}
            <input
              type="submit"
              className={styles.payBtn}
              value="Pay now"
              onClick={onHandlePayNow}
            />

            {/* <!-- Footer --> */}
            <div className={styles.footerText}>
              All rights reserved Decked Out
            </div>
          </form>
        </div>
        <OrderSummary SHIPPING_VALUE={SHIPPING_VALUE} isOpen={isOpen} />
      </div>
    </div>
  );
}
function ContactSection({ setCheckout, checkout }) {
  return (
    <div className="mb-4 contact-form ">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className={`${styles.sectionTitle} mb-0`}>Contact</h2>
      </div>
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={checkout.email || ""}
        onChange={(e) =>
          setCheckout((checkout) => ({ ...checkout, email: e.target.value }))
        }
      />
      <div className="form-check mt-2 d-flex align-items-center gap-3">
        <input className="form-check-input" type="checkbox" id="emailOffers" />
        <label className="form-check-label" htmlFor="emailOffers">
          Email me with news and offers
        </label>
      </div>
    </div>
  );
}
function DeliverySection({ checkout, setCheckout }) {
  return (
    <div className="mb-4">
      <h2 className={styles.sectionTitle}>Delivery</h2>
      <div className="mb-3">
        <label className="form-label">Country/Region</label>
        <select
          className="form-select formSelectt"
          value={checkout.country || "Egypt"}
          onChange={(e) =>
            setCheckout((checkout) => ({
              ...checkout,
              country: e.target.value,
            }))
          }
        >
          <option>Egypt</option>
        </select>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control "
            placeholder="First name"
            required
            value={checkout.name || ""}
            onChange={(e) =>
              setCheckout((checkout) => ({
                ...checkout,
                name: e.target.value,
              }))
            }
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control "
            placeholder="Last name"
            required
            value={checkout.lastName || ""}
            onChange={(e) =>
              setCheckout((checkout) => ({
                ...checkout,
                lastName: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control "
          placeholder="Address"
          required
          value={checkout.address || ""}
          onChange={(e) =>
            setCheckout((checkout) => ({
              ...checkout,
              address: e.target.value,
            }))
          }
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control "
          placeholder="Apartment, suite, etc."
          required
          value={checkout.apartment || ""}
          onChange={(e) =>
            setCheckout((checkout) => ({
              ...checkout,
              apartment: e.target.value,
            }))
          }
        />
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="City"
            required
            value={checkout.city || ""}
            onChange={(e) =>
              setCheckout((checkout) => ({
                ...checkout,
                city: e.target.value,
              }))
            }
          />
        </div>
        <div className="col-md-8">
          <select
            className="form-select formSelectt"
            required
            value={checkout.state || "Cairo"}
            onChange={(e) =>
              setCheckout((checkout) => ({
                ...checkout,
                government: e.target.value,
              }))
            }
          >
            <option>Cairo</option>
            <option>Alexandria</option>
            <option>Port Said</option>
            <option>Suez</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <input
          type="tel"
          className="form-control"
          placeholder="Phone"
          required
          value={checkout.phone || ""}
          onChange={(e) =>
            setCheckout((checkout) => ({
              ...checkout,
              phone: e.target.value,
            }))
          }
        />
      </div>
      <div className="form-check d-flex align-items-center gap-3">
        <input className="form-check-input" type="checkbox" id="saveInfo" />
        <label className="form-check-label" htmlFor="saveInfo">
          Save this information for next time
        </label>
      </div>
    </div>
  );
}
function ShippingMethod({ SHIPPING_VALUE, checkout, setCheckout }) {
  return (
    <div className="mb-4">
      <h2 className={styles.sectionTitle}>Shipping method</h2>
      <div className={`${styles.shippingMethod} ${styles.active}`}>
        <div className="d-flex justify-content-between align-items-center">
          <label
            className="d-flex align-items-center"
            style={{ cursor: "pointer" }}
          >
            <input
              type="radio"
              name="shipping"
              className="me-2 form-check-input"
              value={SHIPPING_VALUE}
              checked={Number(checkout.shippingValue) === SHIPPING_VALUE}
              onChange={(e) => {
                console.log("Shipping changed to:", e.target.value);
                setCheckout((prev) => ({
                  ...prev,
                  shippingValue: Number(e.target.value),
                }));
              }}
            />

            <span className="form-check-label">Deliver To My Door Step</span>
          </label>

          <span className="fw-bold">{SHIPPING_VALUE} LE</span>
        </div>
      </div>
    </div>
  );
}
function PaymentSection({ checkout, setCheckout }) {
  return (
    <div className="mb-4">
      <h2 className={styles.sectionTitle}>Payment</h2>
      <div className={`${styles.shippingMethod} ${styles.active}`}>
        <label
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
        >
          <input
            type="radio"
            name="payment"
            className="me-2"
            value="cod"
            checked={checkout.paymentMethod === "cod"}
            onChange={(e) => {
              setCheckout((prev) => ({
                ...prev,
                paymentMethod: e.target.value,
              }));
            }}
          />
          <span>Cash on Delivery (COD)</span>
        </label>
      </div>
    </div>
  );
}
function OrderSummary({ SHIPPING_VALUE, isOpen }) {
  const { cartProducts, TotalCheckOut, noCartProducts } = useCart();

  return (
    <div
      className={`col-12 order-1 order-md-2 col-md-5  ${
        isOpen ? "d-block" : "d-none"
      }  d-md-block`}
    >
      <div className={styles.orderSummary}>
        {/* <!-- Product Item --> */}
        {cartProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}

        {/* <!-- Discount Code --> */}
        {/* <div className={`${styles.discountInput} mb-4`}>
          <input
            type="text"
            className="form-control"
            placeholder="Discount code"
          />
          <button className={styles.applyBtn}>Apply</button>
        </div> */}

        {/* <!-- Summary --> */}
        <div className={`${styles.summaryRow} d-flex `}>
          <span>Subtotal</span>
          <div className="d-flex flex-column">
            {noCartProducts > 0 &&
              cartProducts.map((product) => (
                <SubTotal product={product} key={product.id} />
              ))}
          </div>
        </div>
        <div className={styles.summaryRow}>
          <span>Shipping</span>
          <span>{SHIPPING_VALUE} LE</span>
        </div>

        {/* <!-- Total --> */}
        <div className={styles.totalRow}>
          <span>Total</span>
          <div>
            <span className={styles.oldPrice}>
              {noCartProducts > 0 &&
                cartProducts.reduce(
                  (acc, product) => acc + product.oldPrice * product.counter,
                  0
                )}
              LE
            </span>
            <span>{TotalCheckOut + SHIPPING_VALUE} LE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function SubTotal({ product }) {
  return (
    <span>
      {product.counter} x {product.price} LE
    </span>
  );
}
function ProductItem({ product }) {
  const id = product.id;
  return (
    <div className={styles.productItem}>
      <div className={styles.productImage}>
        <div className={styles.productBadge}>{product.counter}</div>
        <img src={product.img} alt={product.name} className="img-fluid" />
      </div>
      <div className={styles.productInfo}>
        <Link to={`/product/${id}`} className={styles.productName}>
          {product.name}
        </Link>
        <div className={styles.productSize}>{product.selectedSize}</div>
      </div>
      <div className={styles.productPrice}>{product.totalProductPrice} LE</div>
    </div>
  );
}
