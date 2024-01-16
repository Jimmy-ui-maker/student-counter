import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row no-gutters">
          <h1 className=" text-center">Computer Science Student Counter</h1>
          <hr />
          <div
            className="cnt col-xl-5 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <div className="cnt">
              <h3>Purposes</h3>
              <ul>
                <li>
                  <i className="bi bi-chevron-double-right"></i>
                  To capture the total number of student in each level.
                </li>
                <li>
                  <i className="bi bi-chevron-double-right"></i>
                  To sum up and get the total records.
                </li>
                <li>
                  <i className="bi bi-chevron-double-right"></i>
                  To be able to capture and store the record in a database.
                </li>

                <li>
                  <i className="bi bi-chevron-double-right"></i>
                  To edit and delete the record if necessary.
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-7 d-flex align-items-stretch">
            <div className="icon-boxes d-flex flex-column justify-content-center">
              <div className="row">
                <div
                  className="col-6 col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i className="bi bi-question-circle"></i>
                  <h4>Why choose us</h4>
                  <p>
                    <Link className="btn rounded-2 border-info" href={"/"}>
                      Check it here
                    </Link>
                  </p>
                </div>
                <div
                  className="col-6 col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="bi bi-question-circle"></i>
                  <h4>FAQs</h4>
                  <p>
                    <Link className="btn rounded-2 border-info" href={"/"}>
                      Check it here
                    </Link>
                  </p>
                </div>
                <div
                  className="col-6 col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-clipboard-plus"></i>
                  <h4>Total Students </h4>
                  <p>
                    <Link
                      className="btn rounded-2 border-info"
                      href={"#admin-cards"}
                    >
                      In all Department
                    </Link>
                  </p>
                </div>
                <div
                  className="col-6 col-md-6 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-clipboard-plus"></i>
                  <h4>Total student </h4>
                  <p>
                    <Link
                      className="btn rounded-2 border-info"
                      href={"#admin-cards"}
                    >
                      Each department
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
