export default async function FAQs() {
  return (
    <>
      <div
        class="modal fade"
        id="faqs"
        tabindex="-1"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content faqs-modal">
            {/** Header */}
            <div class="modal-header">
              <div class="topic text-center">
                <h2>Freqently Ask Questions</h2>
              </div>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/** Modal Body */}
            <div class="modal-body">
              {/** Accordion Body */}
              <div class="row  justify-content-around align-items-center">
                <div class="col-lg-12">
                  <div
                    className="accordion "
                    data-aos="fade-up"
                    data-aos-delay="200"
                    id="chapters"
                  >
                    {/*<!---Item 1-->*/}
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      {/*<!---Heading-->*/}
                      <h2 className="accordion-header" id="heading-1">
                        <button
                          className="accordion-button shadow-none "
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#chapter-1"
                          aria-expanded="true"
                          aria-controls="chapter-1"
                        >
                          I did'nt see the Record i just inserted, why?
                        </button>
                      </h2>
                      {/*<!---Accordion Collapse-->*/}
                      <div
                        id="chapter-1"
                        className="accordion-colapse collapse show"
                        aria-labelledby="heading-1"
                        data-bs-parent="#chapters"
                      >
                        {/*<!---Accordiion Body-->*/}
                        <div className="accordion-body ">
                          <p>
                            Is processing your record, but you might click on
                            Level in the Navbar above or scroll down to where it
                            says BELLOW THE TOTAL STUDENTS, click on the icon on
                            it or click the card it self to retrief the Records
                            from API. Thank You.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/*<!---Item 2-->*/}
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      {/*<!---Heading-->*/}
                      <h2 className="accordion-header" id="heading-2">
                        <button
                          className="accordion-button shadow-none"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#chapter-2"
                          aria-expanded="false"
                          aria-controls="chapter-2"
                        >
                          Can i edit or delete if pahaps i made mistake while
                          adding a records?
                        </button>
                      </h2>

                      <div
                        id="chapter-2"
                        className="accordion-colapse collapse"
                        aria-labelledby="heading-2"
                        data-bs-parent="#chapters"
                      >
                        <div className="accordion-body">
                          <p>
                            Answer is No, It can be done in Admin Sites <br />
                            But i believed the app has already tackles your
                            question.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/*<!---Item 3-->*/}
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <h2 className="accordion-header" id="heading-3">
                        <button
                          className="accordion-button shadow-none"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#chapter-3"
                          aria-expanded="false"
                          aria-controls="chapter-3"
                        >
                          I haven't seen the record yet ooo?
                        </button>
                      </h2>

                      <div
                        id="chapter-3"
                        className="accordion-colapse collapse"
                        aria-labelledby="heading-3"
                        data-bs-parent="#chapters"
                      >
                        <div className="accordion-body">
                          <p>
                            Calm down, take a breath. <br />
                            You can now try inserting same records, the app will
                            response to you saying 'User Already Exist'.
                            <br />
                            Dont worry, your record is saved Successfully.
                            <br />
                            Thank You.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/*<!---Item 4-->*/}
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      <h2 className="accordion-header" id="heading-4">
                        <button
                          className="accordion-button shadow-none"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#chapter-4"
                          aria-expanded="false"
                          aria-controls="chapter-4"
                        >
                          Contact form not working why?
                        </button>
                      </h2>

                      <div
                        id="chapter-4"
                        className="accordion-colapse collapse"
                        aria-labelledby="heading-4"
                        data-bs-parent="#chapters"
                      >
                        <div className="accordion-body">
                          <p>
                            I agreed with you, the site is still under
                            development <br /> Thnk You.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*<!---Item 5-->*/}
                    <div
                      className="accordion-item"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      <h2 className="accordion-header" id="heading-5">
                        <button
                          className="accordion-button shadow-none"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#chapter-5"
                          aria-expanded="false"
                          aria-controls="chapter-5"
                        >
                          WOW!!! I Love this interactive site, can i...?
                        </button>
                      </h2>

                      <div
                        id="chapter-5"
                        className="accordion-colapse collapse"
                        aria-labelledby="heading-5"
                        data-bs-parent="#chapters"
                      >
                        <div className="accordion-body">
                          <p>
                            Oh... i get, I really appreaciate, there is my email
                            and my contact, feel free to contact me. <br />
                            Thank You..
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
