import styles from "./DeliveryPage.module.css";
import AnnouncementBar from "../../Components/Marquee/AnnouncementBar/AnnouncementBar";
import Footer from "../../Components/Footer/MainFooter/MainFooter";
import SeconderyNav from "../../Components/NavBar/SeconderyNav/SeconderyNav";

export default function DeliveryPage() {
  return (
    <>
      <header>
        <AnnouncementBar />

        <SeconderyNav />
      </header>
      <main className={styles.Delivery}>
        <div
          className={`${styles.container} container d-flex flex-column align-items-center justify-content-center py-5`}
        >
          <h1 className={`${styles.deliveryHeader}  mb-5`}>Delivery</h1>
          <div className="delivery-details">
            <p>
              Orders take from 3 to 7 business days to be delivered everywhere
              in Egypt and from 5 to 15 business days for the rest of the world
              depending on where it's being shipped.
            </p>
            <p>
              For international orders, it’s important to note that once your
              order arrives in your country, it may be subjected to customs
              regulations and fees, which are determined by your country's rules
              and regulations. These additional charges are beyond our control
              and are the responsibility of the recipient.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
