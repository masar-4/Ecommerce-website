import AnnouncementBar from "../../Components/Marquee/AnnouncementBar/AnnouncementBar";
import DenimProducts from "../../Components/Products/DenimProducts/DenimProducts";
import Footer from "../../Components/Footer/MainFooter/MainFooter";
import NewArrival from "../../Components/Marquee/NewArrivalBar/NewArrivalBar";
import SeconderyNav from "../../Components/NavBar/SeconderyNav/SeconderyNav";


export default function DenimPage() {

  return (
    <>
      <AnnouncementBar />
      <SeconderyNav />

      <main className="denim-Page py-5">
        <div className="page-title d-flex justify-content-center align-items-center">
          <h1 className="text-uppercase">Denim</h1>
        </div>
        <div className="container py-5">
          <DenimProducts />
        </div>
        <NewArrival />
      </main>
      <Footer />
    </>
  );
}
