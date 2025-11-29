import styles from "./ProductPage.module.css";
import AnnouncementBar from "../../Components/Marquee/AnnouncementBar/AnnouncementBar";
import Footer from "../../Components/Footer/MainFooter/MainFooter";
import NewArrival from "../../Components/Marquee/NewArrivalBar/NewArrivalBar";
import SeconderyNav from "../../Components/NavBar/SeconderyNav/SeconderyNav";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
export default function ProductPage() {
  return (
    <>
      <AnnouncementBar />
      <SeconderyNav />
      <Product />
      <NewArrival />
      <Footer />
    </>
  );
}
function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(
    function () {
      async function getProducts() {
        try {
          const res = await fetch(`http://localhost:4000/api/products/${id}`);
          const data = await res.json();
          const NewDenimProducts = data.data;
          setProduct(NewDenimProducts);
        } catch (error) {
          console.log(error);
        }
      }
      getProducts();
    },
    [id]
  );
  return (
    <main className={`${styles.productPage}`}>
      <div className="container">
        <div className="wrapper row">
          <ProductImageSection product={product} />
          <ProductDetails product={product} setProduct={setProduct} />
        </div>
      </div>
    </main>
  );
}
function ProductImageSection({ product }) {
  return (
    <section className={"productImg col-md-6"}>
      <img src={product.img} alt="" className="img-fluid" />
    </section>
  );
}
function ProductDetails({ product, setProduct }) {
  return (
    <section className="productDetails col-md-6">
      <ProductTitle product={product} />

      <ProductDescription product={product} />
      <CallToAction product={product} setProduct={setProduct} />
    </section>
  );
}
function ProductTitle({ product }) {
  return (
    <div className={`${styles.productTitle}`}>
      <span className={styles.deckedout}>Deckedout</span>
      <h6 className="text-uppercase mb-2">{product.name}</h6>
      <p className="mb-0">{product.newPriceText}</p>
      <span className={`${styles.tax} text-capitalize`}>tax included</span>
    </div>
  );
}
function ProductDescription({ product }) {
  return (
    <div className="ProductDescription">
      <article className={`${styles.article} introduction`}>
        <p>Introducing the {product.name}</p>
      </article>
      <article className={`${styles.article} maleModel`}>
        <p>Male model wears: Size 42</p>
        <p>Model's height: 187cm</p>
      </article>
      <article className={`${styles.article} femaleModel`}>
        <p>Female model wears: Size 38</p>
        <p>Model's height: 177cm</p>
      </article>
      <article className={`${styles.article} productMaterial`}>
        <ul>
          <li>
            <p>Medium dropped crotch</p>
          </li>
          <li>
            <p>Five pockets</p>
          </li>
          <li>
            <p>Low-rise</p>
          </li>
          <li>
            <p>Zipper fly</p>
          </li>
          <li>
            <p>Embossed button</p>
          </li>
          <li>
            <p>Belt loops at waist band</p>
          </li>
          <li>
            <p>Acid wash</p>
          </li>
        </ul>
      </article>
      <article className={`${styles.article} lookingAfter`}>
        <h6>Looking After</h6>
        <ul>
          <li>
            <p>wash flipped inside out</p>
          </li>
          <li>
            <p>water temperature 30 degrees or below</p>
          </li>
          <li>
            <p>preferably hand washed</p>
          </li>
          <li>
            <p>don't use bleach</p>
          </li>
          <li>
            <p>medium iron</p>
          </li>
        </ul>
      </article>
      <article className={`${styles.article} aboutMe`}>
        <h6>About Me</h6>
        <p>Fabric made of 100% denim cotton</p>
      </article>
    </div>
  );
}
function CallToAction({ product, setProduct }) {
  const [counter, setCounter] = useState(1);
  const {
    cartProducts,
    setCartIsOpen,
    handleUpdateCounter,
    onHandleAddToCart,
  } = useCart();
  function handleBuyNow() {
    if (cartProducts.find((p) => p.id === product._id)) return;
    onHandleAddToCart(product, product.selectedSize, counter);
    setCartIsOpen((cartIsOpen) => !cartIsOpen);
  }

  function handleAddCounter(eachProduct) {
    if (counter >= 1 && counter < 20) {
      const newCounter = counter + 1;
      setCounter(newCounter);
      setProduct({
        ...product,
        counter: newCounter,
      });
      if (cartProducts.find((p) => p.id === eachProduct._id))
        handleUpdateCounter(
          eachProduct._id,
          newCounter,
          eachProduct.selectedSize
        );
    }
  }
  function handleMinusCounter(eachProduct) {
    if (counter > 1 && counter <= 20) {
      const newCounter = counter - 1;
      setCounter(newCounter);

      setProduct({
        ...product,
        counter: newCounter,
      });
      if (cartProducts.find((p) => p.id === eachProduct._id))
        handleUpdateCounter(
          eachProduct._id,
          newCounter,
          eachProduct.selectedSize
        );
    }
  }
  function handleSizeSelection(newSelectedSize) {
    setProduct((product) => ({
      ...product,
      selectedSize: newSelectedSize,
    }));
  }

  return (
    <div className="ctaButtons mt-3 row gap-3 justify-content-center">
      <select
        className={`${styles.SizeSelection} col-12 d-flex gap-4  align-items-center`}
        onChange={(e) => handleSizeSelection(e.target.value)}
      >
        {product.availableSizes &&
          product.availableSizes.length > 0 &&
          product.availableSizes.map((p) => (
            <SizeList size={p.size} key={p.size} />
          ))}
      </select>
      <div className="addToCart row align-items-center justify-content-between ">
        <div
          className={`${styles.counter} col-3 d-flex gap-3 align-items-center px-5 py-3 justify-content-center`}
        >
          <i
            className="fa-solid fa-minus"
            onClick={() => handleMinusCounter(product)}
          ></i>
          <span>{counter}</span>
          <i
            className="fa-solid fa-plus"
            onClick={() => handleAddCounter(product)}
          ></i>
        </div>
        <div
          className={`${styles.addtocartBtn} col-9 row`}
          onClick={() =>
            onHandleAddToCart(product, product.selectedSize, counter)
          }
        >
          <button className="text-uppercase">add to cart</button>
        </div>
      </div>
      <div
        className={`${styles.buyNow} col-12 row mb-2`}
        onClick={handleBuyNow}
      >
        <Link to="/checkout">
          <button className="text-uppercase w-100">buy now</button>
        </Link>
      </div>
    </div>
  );
}
function SizeList({ size }) {
  return (
    <>
      <option value={size}>{size}</option>
    </>
  );
}
