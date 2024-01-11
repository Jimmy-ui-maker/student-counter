import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <section
        id="gadmin"
        className=" w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
      >
        <div className="container text-center">
          <img
            data-aos="fade-up"
            data-aos-delay="200"
            src="/kasu/kasulogo.png"
            alt="kasu-logo"
            width={200}
            height={170}
            className=" pb-4"
          />
          <div class="btns" data-aos="fade-up" data-aos-delay="300">
            <div className="row mx-2">
              <div className="card g-4 border-white">
                <div className="card-body ">
                  <h3 className=" my-2">Student's Counter</h3>
                  <h5 className=" my-2 ">Computer Science Department, KASU.</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" a-route col-lg-12 col-12 mt-4">
                <a
                  href=""
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#form1"
                >
                  1+
                </a>
                <a
                  href=""
                  className="btn scrollto"
                  data-bs-toggle="modal"
                  data-bs-target="#form2"
                >
                  2+
                </a>
                <a href="#about" className="btn-get-started scrollto">
                  <i className="bi bi-chevron-double-down"></i>
                </a>
                <a
                  href=""
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#form3"
                >
                  3+
                </a>
                <a
                  href=""
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#form4"
                >
                  4+
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
