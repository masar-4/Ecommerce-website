import AnnouncementBar from "../../Components/Marquee/AnnouncementBar/AnnouncementBar";
import DenimProducts from "../../Components/Products/DenimProducts/DenimProducts";
import Footer from "../../Components/Footer/MainFooter/MainFooter";
import NewArrival from "../../Components/Marquee/NewArrivalBar/NewArrivalBar";
import SeconderyNav from "../../Components/NavBar/SeconderyNav/SeconderyNav";
import TeeProducts from "../../Components/Products/TeeProducts/TeeProducts";

export default function AllProductsPage() {
  return (
    <>
      <AnnouncementBar />
      <SeconderyNav />

      <main className="all-products-Page py-5">
        <div className="page-title d-flex justify-content-center align-items-center">
          <h1 className="text-uppercase">all products</h1>
        </div>
        <div className="container py-5">
          <DenimProducts />
        </div>
        <div className="container py-5">
          <TeeProducts />
        </div>
        <NewArrival />
      </main>
      <Footer />
    </>
  );
}
