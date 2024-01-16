import Link from "next/link";
export default function ContactUs() {
  return (
    <>
      <section
        className="contact w-100 flex-column justify-content-center align-items-center shadow-sm"
        id="contact"
      >
        <div className="container contact">
          <div class="text-center">
            <p className="heading">Contact Us</p>
            <hr className="mb-0" />
          </div>

          <div className="row g-4 justify-content-center align-items-center ">
            <div className="col-12 col-lg-6 align-self-start order-1 order-lg-0">
              <div className="card">
                <Link
                  href="/kasu/slt-one.jpg"
                  data-lightbox="about-image"
                  data-title=" Location"
                  className="glightbox mb-0"
                >
                  <img src="/kasu/one-k.jpg" className="card-img" />
                </Link>
                <div className="card-body">
                  <h5 className="card-subtitle">Contact Address</h5>

                  <h5 className="card-subtitle mt-2 ">
                    <i className="bi bi-house-fill text-white me-2 border-0"></i>
                    Email
                  </h5>
                  <p className="ms-4">jimiyaks3@gmail.conm</p>
                  <h5 className="card-subtitle mb-2">
                    <i className="bi bi-phone-fill text-white me-2 border-0"></i>
                    Telephone
                  </h5>
                  <p className="ms-4">+234 701 022 8016</p>
                  <h5 className="card-subtitle mb-2">
                    <i className="bi bi-clock-fill text-white me-2 border-0"></i>
                    Time
                  </h5>
                  <p className="ms-4">24 Hour's</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 align-self-start order-0 order-lg-1">
              <div className="card ">
                <div className="card-body">
                  <h5 className="card-subtitle mb-3">Contact Form</h5>
                  <form className="g-2 ">
                    <div className="col-md-12 ">
                      <label htmlFor="code" className="form-label">
                        Full Name:
                      </label>

                      <input
                        type="text"
                        className="form-control shadow-sm bg-transparent"
                        id="name"
                        readOnly
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="title" className="form-label">
                        E-Mail Address
                      </label>
                      <input
                        type="title"
                        className="form-control  shadow-sm bg-transparent"
                        id="email"
                        readOnly
                      />
                    </div>

                    <div className="mb-1">
                      <label htmlFor="enquiry" className="form-label">
                        Enquiry
                      </label>
                      <textarea
                        className="form-control  shadow-sm bg-transparent"
                        id="enquiry"
                        rows="5"
                        readOnly
                      ></textarea>
                    </div>
                    <div className="d-flex align-self-end justify-content-end text-end">
                      <button
                        type="submit"
                        className="btn btn-submit my-2  fw-semibold "
                      >
                        SUBMIT
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
