import Input from "@/components/Input";
import React from "react";

export default function page() {
  return (
    <section className="section-bg" id="allForms">
      <div className="container">
        <div class="topic text-center">
          <h2>Welcome Back</h2>
          <hr className=" bg-white " />
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6 align-self-start ">
            <div className="card  mt-3">
              <div className="card-body">
                <form className=" align-items-center p-2  rounded">
                  <h1 className=" text-center">100 Level Entry Page</h1>
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
                      <Input type="text" placeholder="Matric" name="matric" />
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
    </section>
  );
}
