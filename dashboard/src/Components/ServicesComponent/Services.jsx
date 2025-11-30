export default function Services() {
  return (
    <section className="services py-5">
      <div className="container row justify-content-center gap-4">
        <div className="support-info col-8 col-md-5">
          <div className="wrapper d-flex align-items-center gap-3 justify-content-center">
            <i className="fa-solid fa-headset" style={{ fontSize: "60px" }}></i>
            <div className="description d-flex flex-column">
              <h4>Customer Support</h4>
              <p>Sat - Thurs, 11am - 7pm</p>
            </div>
          </div>
        </div>
        <div className="returns-info col-8 col-md-5">
          <div className="wrapper d-flex align-items-center gap-3 justify-content-center justify-content-md-end">
            <i
              className="fa-solid fa-arrow-right-arrow-left"
              style={{ fontSize: "60px" }}
            ></i>
            <div className="description d-flex flex-column">
              <h4>Easy Returns</h4>
              <p>Returns & Exchanges extended to 14 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
