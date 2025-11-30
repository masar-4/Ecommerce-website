import styles from "./ContactPage.module.css";
import AnnouncementBar from "../../Components/Marquee/AnnouncementBar/AnnouncementBar";
import Footer from "../../Components/Footer/MainFooter/MainFooter";
import SeconderyNav from "../../Components/NavBar/SeconderyNav/SeconderyNav";

export default function ContactPage() {
  return (
    <>
      <AnnouncementBar />
      <SeconderyNav />
      <main className={`${styles.contact}  py-5`}>
        <div
          className={`${styles.container} container d-flex flex-column align-items-center justify-content-center py-5`}
        >
          <h1 className={`${styles.contactHeader} mb-5`}>Contact Info</h1>
          <div className="contact-details">
            <p>
              For any inquiries or assistance, please don<q>t</q> hesitate to
              contact us via email. We are dedicated to promptly addressing and
              resolving your concerns.
            </p>
            <p>Email: info@shopdeckedout.com</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
