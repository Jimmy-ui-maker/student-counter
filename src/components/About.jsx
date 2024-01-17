export default async function About() {
  return (
    <>
      <div
        class="modal fade"
        id="about"
        tabindex="-1"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content faqs-modal">
            {/** Header */}
            <div class="modal-header">
              <div class="topic text-center">
                <h2>About us</h2>
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
                  <h2 className=" text-white">Under development for now.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
