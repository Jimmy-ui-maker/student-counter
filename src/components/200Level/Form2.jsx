import Input from "../Input";

export default function Form2() {
  return (
    <>
      

      <div
        class="modal fade"
        id="form2"
        tabindex="-1"
        aria-labelledby="modal-title"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content c-modal">
            {/** Header */}
            <div class="modal-header">
              <div class="topic text-center">
                <h2>Welcome Back</h2>
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
              <div className="row justify-content-center align-items-center">
                <div className="card  mt-3">
                  <div className="card-body">
                    <form className=" align-items-center p-2  rounded">
                      <h1 className=" text-center">200 Level Entry Page</h1>
                      <hr />
                      <div className="flex mb-4">
                        <div className="col-md-12">
                          <label className="">Fullames</label>
                          <Input
                            type="text"
                            placeholder="Fullnames"
                            name="fullnames"
                          />
                        </div>
                        <div className="col-md-12">
                          <label className="">Matric</label>
                          <Input
                            type="text"
                            placeholder="Matric"
                            name="matric"
                          />
                        </div>
                      </div>
                      <div className="flex mb-4">
                        <div className="col-md-12">
                          <label className="">Level</label>
                          <Input type="text" placeholder="level" name="level" />
                        </div>
                        <div className="col-md-12">
                          <label className="">Phone</label>
                          <Input
                            type="number"
                            placeholder="Contact Number"
                            name="phone"
                          />
                        </div>
                        <div className="col-md-12">
                          <label className="">Desctiption</label>
                          <Input type="text" placeholder="desc" name="desc" />
                        </div>
                      </div>
                      <div className=" d-flex justify-content-center">
                        <button className="btn btn-outline-info" type="submit">
                          Create User
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
