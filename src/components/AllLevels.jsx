
import { AllLevelTable } from "@/models/AllTables";
import Link from "next/link";
import React from "react";

export default async function AllLevels() {
  
  const level1 = await AllLevelTable.find({ level: "100L" }).countDocuments();
  const level2 = await AllLevelTable.find({ level: "200L" }).countDocuments();
  const level3 = await AllLevelTable.find({ level: "300L" }).countDocuments();
  const level4 = await AllLevelTable.find({ level: "400L" }).countDocuments();

  {
    /**
  const level1 = await Counter1();
  const level2 = await Counter2();
  const level3 = await Counter3();
  const level4 = await Counter4();
    */
  }

  const aggregate = level1 + level2 + level3 + level4;

  const localhosturl = process.env.API_URL;

  return (
    <section
      id="admin-cards"
      className="admin-cards admin shadow-lg d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container">
        <div
          className=" title text-center"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <h2 className=" text-uppercase">Bellow the total Students</h2>
          <hr />
          <p>for each level and all department</p>
        </div>
        <div className="  row d-flex justify-content-center align-items-center text-center">
          <div className="row g-lg-4 g-3">
            <div className="col-12 col-lg-3 text-lg-start text-center ">
              <div className="card p-3 shadow" data-aos="fade-up">
                <Link
                  className=" text-decoration-none"
                  href={`${localhosturl}/api/allLevels`}
                >
                  <h3 className=" p-2">100 Level</h3>
                  <h4 className=" px-2">Total = {level1}</h4>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 shadow"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Link
                  className=" text-decoration-none"
                  href={`${localhosturl}/api/allLevels`}
                >
                  <h3 className=" p-2">200 Level</h3>
                  <h4 className=" px-2">Total = {level2}</h4>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 shadow"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link
                  className=" text-decoration-none"
                  href={`${localhosturl}/api/allLevels`}
                >
                  <h3 className=" p-2">300 Level</h3>
                  <h4 className=" px-2">Total = {level3}</h4>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 shadow"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link
                  className=" text-decoration-none"
                  href={`${localhosturl}/api/allLevels`}
                >
                  <h3 className=" p-2">400 Level</h3>
                  <h4 className=" px-2">Total = {level4}</h4>
                </Link>
              </div>
            </div>
          </div>
          <div className="row  d-flex justify-content-center ">
            <div className=" col-lg-12 col-12 ">
              <div
                className="card mt-4 total shadow "
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <div className="card-body">
                  <h1 className="">Aggregate = {aggregate} </h1>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>
    </section>
  );
}
