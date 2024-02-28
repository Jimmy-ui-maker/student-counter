import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <>
      <section
        className="welcome w-100 vh-100 d-flex flex-column justify-content-center align-items-center"
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
              <div className="card g-4">
                <div className="card-body ">
                  <h3 className=" my-2">Student's Counter</h3>
                  <h5 className=" my-2 ">Computer Science Department,KASU.</h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="">
                <Link href="/allForms" className="btnForm fw-semibold ">
                  Add Your Data
                </Link>
              </div>
              <div className=" a-route col-lg-12 col-12 mt-4">
                <Link href="" className="btn-get-started ">
                  <i className="bi bi-chevron-double-down"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
