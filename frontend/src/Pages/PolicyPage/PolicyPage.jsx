import styles from "./PolicyPage.module.css";
import AnnouncementBar from "../../Components/Marquee/AnnouncementBar/AnnouncementBar";
import Footer from "../../Components/Footer/MainFooter/MainFooter";
import SeconderyNav from "../../Components/NavBar/SeconderyNav/SeconderyNav";

export default function PolicyPage() {
  return (
    <>
      <AnnouncementBar />

      <SeconderyNav />

      <PolicyContent />
      <Footer />
    </>
  );
}
function PolicyContent() {
  return (
    <main className={styles.policy}>
      <div className="container d-flex flex-column align-items-center justify-content-center py-5">
        <h1 className={`${styles.returnHeader} mb-5`}>
          Return & Exchange Policy
        </h1>
        <ul className="row gap-3 mx-auto">
          <li>
            <p>
              All returns, refunds and size exchanges must be done within a
              maximum of five days of receiving your product.
            </p>
          </li>
          <li>
            <p>
              We would like to inform you that as per our couriers policy,
              opening the package upon delivery is not permitted. Unfortunately,
              this means you wont be able to inspect or separate items upon
              receipt. Rest assured, we understand the importance of customer
              satisfaction. If, for any reason, you wish to return or exchange
              an item, you have a generous window of 5 days to reach out to us.
              Our dedicated customer service team will be more than happy to
              assist you with any concerns or requests.
            </p>
          </li>
          <li>
            <p>
              Reach out to us via DM or email info@shopdeckedout.com in case you
              decided to return/exchange.
            </p>
          </li>
          <li>
            <p>
              Returned/exchanged items must be returned new, unused, unwashed
              and with all garment tags attached otherwise we won’t be able to
              neither return nor exchange the product.
            </p>
          </li>
          <li>
            <p>
              For return and exchange orders, the customer pays for the shipping
              fees of the item returning back to us in case of a return. In case
              of an exchange the clients pays for both return and forward items
            </p>
          </li>
          <li>
            <p>
              For international orders, it’s important to note that once your
              order arrives in your country, it may be subjected to customs
              regulations and fees, which are determined by your countrys rules
              and regulations. These additional charges are beyond our control
              and are the responsibility of the recipient.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
