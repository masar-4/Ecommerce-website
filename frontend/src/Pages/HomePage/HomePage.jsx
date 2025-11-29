import styles from "./HomePage.module.css";
import girlDenim from "../../assets/home-page/girl3.webp";
import boyDenim from "../../assets/home-page/boy3.webp";
import MainNav from "../../Components/NavBar/MainNav/MainNav";
import ShopNowBtn from "../../Components/Buttons/ShopNowBtn/ShopNowBtn";
import Footer from "../../Components/Footer/MainFooter/MainFooter";
import AnnouncementBar from "../../Components/Marquee/AnnouncementBar/AnnouncementBar";
import NewArrivalBar from "../../Components/Marquee/NewArrivalBar/NewArrivalBar";
import Services from "../../Components/ServicesComponent/Services";
import TeeProducts from "../../Components/Products/TeeProducts/TeeProducts";
import DenimProducts from "../../Components/Products/DenimProducts/DenimProducts";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export default function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
{
  /*start - Header */
}
function Header() {
  return (
    <header className={styles.header}>
      <AnnouncementBar />
      <div className="overlay">
        <MainNav />
        <HeroSection />
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className={`${styles.heroSection} d-flex`}>
      <div className="container">
        <div className="wrapper d-flex flex-column align-items-center gap-4">
          <p>S S 25</p>
          <ShopNowBtn />
        </div>
      </div>
    </section>
  );
}
{
  /*end - Header */
}
{
  /*start - main */
}
function Main() {
  return (
    <main>
      <Collections />

      <AllCollectionProducts />

      <NewArrivalBar />
      <TwoCards />
      <Services />
    </main>
  );
}
{
  /*start - Collections */
}
function Collections() {
  const { CollectionIsOpen, setCollectionIsOpen } = useCart();
  return (
    <div className={`container ${styles.collectionsSection}`}>
      <div className="row align-items-center">
        <section className="col-md-6 d-flex flex-column align-items-center align-items-md-start">
          <div className="wrapper d-flex flex-column align-items-center align-items-md-start">
            <h2 className={styles.collectionsTitle}>Collections</h2>
            <p className={styles.collectionsSubtitle}>Best Sellers</p>
          </div>
          <div className={styles.categoryTabs}>
            <span
              className={
                !CollectionIsOpen
                  ? `${styles.active} me-1`
                  : `${styles.inactive} me-1`
              }
              onClick={() =>
                setCollectionIsOpen((CollectionIsOpen) =>
                  CollectionIsOpen ? !CollectionIsOpen : CollectionIsOpen
                )
              }
            >
              TEES
            </span>
            /
            <span
              className={
                CollectionIsOpen
                  ? `${styles.active} ms-1`
                  : `${styles.inactive} ms-1`
              }
              onClick={() =>
                setCollectionIsOpen((CollectionIsOpen) =>
                  !CollectionIsOpen ? !CollectionIsOpen : CollectionIsOpen
                )
              }
            >
              Denim
            </span>
          </div>
        </section>

        <section className="col-md-6 text-md-end mt-3 mt-md-0 shop-link-container d-flex justify-content-center justify-content-md-end">
          <Link
            to={!CollectionIsOpen ? "/tees" : "/denim"}
            className={`${styles.shopLink} text-uppercase `}
          >
            {!CollectionIsOpen ? "shop tees" : "shop denim"}
            <i className="fa-solid fa-right-to-bracket"></i>
          </Link>
        </section>
      </div>
    </div>
  );
}

function AllCollectionProducts() {
  const { CollectionIsOpen } = useCart();
  return (
    <div className="container py-5">
      {!CollectionIsOpen ? <TeeProducts /> : <DenimProducts />}
    </div>
  );
}

{
  /*end - Collections*/
}

function TwoCards() {
  return (
    <section className="py-5 two-cards">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6">
            <div className={`${styles.dropCard} text-white p-4`}>
              <img
                src={girlDenim}
                alt="Denim Blue"
                className={`img-fluid ${styles.dropImg}`}
              />
              <div className={styles.content}>
                <p
                  className={`text-uppercase small mt-3 ${styles.letterSpacing}`}
                >
                  Big Air Denim
                </p>
                <h2 className="fw-bold">Newest Drop</h2>
                <p className="mb-4">Ballon Fit</p>
                <ShopNowBtn />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className={`${styles.dropCard} text-white p-4`}>
              <img
                src={boyDenim}
                alt="Denim Grey"
                className={`img-fluid ${styles.dropImg}`}
              />
              <div className={styles.content}>
                <p
                  className={`text-uppercase small mt-3 ${styles.letterSpacing}`}
                >
                  Big Air Denim
                </p>
                <h2 className="fw-bold">Newest Drop</h2>
                <p className="mb-4">Ballon Fit</p>
                <ShopNowBtn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /*end - Main*/
}
