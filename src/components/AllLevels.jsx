import Counter1 from "@/counters/Counter1";
import Counter2 from "@/counters/Counter2";
import Counter3 from "@/counters/Counter3";
import Counter4 from "@/counters/Counter4";
import { LevelFour, LevelOne, LevelThree, LevelTwo } from "@/models/Tables";
import Link from "next/link";
import React from "react";

export default async function AllLevels() {
  {
    /** Server fetching
     * const level1 = await LevelOne.find({}).countDocuments();
  const level2 = await LevelTwo.find({}).countDocuments();
  const level3 = await LevelThree.find({}).countDocuments();
  const level4 = await LevelFour.find({}).countDocuments(); */
  }

  const level1 = await Counter1();
  const level2 = await Counter2();
  const level3 = await Counter3();
  const level4 = await Counter4();

  const aggregate = level1 + level2 + level3 + level4;

  const localhosturl = process.env.NEXTAUTH_URL;

  return (
    <section
      id="admin-cards"
      className="admin-cards admin d-flex flex-column justify-content-center align-items-center"
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
              <div className="card p-3 icon-box" data-aos="fade-up">
                <Link
                  className=" text-decoration-none"
                  href={`${localhosturl}/api/level1`}
                >
                  <h3 className=" p-2">100 Level</h3>
                  <h4 className=" px-2">Total = {level1}</h4>
                </Link>
                <Link
                  className=" s-view "
                  href={""}
                  data-bs-toggle="modal"
                  data-bs-target="#record1"
                >
                  <i className="bi bi-arrow-repeat "></i>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 icon-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Link
                  className=" text-decoration-none"
                  href={`${localhosturl}/api/level2`}
                >
                  <h3 className=" p-2">200 Level</h3>
                  <h4 className=" px-2">Total = {level2}</h4>
                </Link>
                <Link
                  className=" s-view "
                  href={""}
                  data-bs-toggle="modal"
                  data-bs-target="#record2"
                >
                  <i className="bi bi-arrow-repeat "></i>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 icon-box"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Link
                  className=" text-decoration-none"
                  href={`${localhosturl}/api/level3`}
                >
                  <h3 className=" p-2">300 Level</h3>
                  <h4 className=" px-2">Total = {level3}</h4>
                </Link>
                <Link
                  className=" s-view "
                  href={""}
                  data-bs-toggle="modal"
                  data-bs-target="#record3"
                >
                  <i className="bi bi-arrow-repeat "></i>
                </Link>
              </div>
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              <div
                className="card p-3 icon-box"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Link
                  className=" text-decoration-none"
                  href={`${localhosturl}/api/level4`}
                >
                  <h3 className=" p-2">400 Level</h3>
                  <h4 className=" px-2">Total = {level4}</h4>
                </Link>
                <Link
                  className=" s-view "
                  href={""}
                  data-bs-toggle="modal"
                  data-bs-target="#record4"
                >
                  <i className="bi bi-arrow-repeat "></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row  d-flex justify-content-center ">
            <div className=" col-lg-12 col-12 ">
              <div
                className="card mt-4 total "
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
