import { AllLevelTable } from "@/models/AllTables";

export default async function Matrics() {
  const level1 = await AllLevelTable.find({}, null, {
    sort: { _id: -1 },
    limit:1,
  });
  const level2 = await AllLevelTable.find({}, null, {
    sort: { _id: -1 },
    limit:1,
  });
  const level3 = await AllLevelTable.find({}, null, {
    sort: { _id: -1 },
    limit:1,
  });
  const level4 = await AllLevelTable.find({}, null, {
    sort: { _id: -1 },
    limit:1,
  });
  return (
    <section
      id="matric-cards"
      className="admin-cards shadow-md admin d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container">
        <div
          className=" title text-center"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <h2 className="">Bellow the Recent Inserted Records.</h2>
          <hr />
          <p>For each level.</p>
        </div>
        <div className="  row d-flex justify-content-center align-items-center text-center">
          <div className="row g-lg-4 g-3">
            <div className="col-12 col-lg-3 text-lg-start text-center ">
              {level1.map((l1) => (
                <div
                  key={l1._id}
                  className="card p-3 icon-box"
                  data-aos="fade-up"
                >
                  <h3 className=" p-2">100 Level Record</h3>
                  <h4 className=" px-2">{l1.matric}</h4>
                </div>
              ))}
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              {level2.map((l2) => (
                <div
                  key={l2._id}
                  className="card p-3 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3 className=" p-2">200 Level Record</h3>
                  <h4 className=" px-2">{l2.matric}</h4>
                </div>
              ))}
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              {level3.map((l3) => (
                <div
                  key={l3._id}
                  className="card p-3 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3 className=" p-2">300 Level Record</h3>
                  <h4 className=" px-2">{l3.matric}</h4>
                </div>
              ))}
            </div>

            <div className="col-12 col-lg-3 text-lg-start text-center ">
              {level4.map((l4) => (
                <div
                  key={l4._id}
                  className="card p-3 icon-box"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3 className=" p-2">400 Level Record</h3>
                  <h4 className=" px-2">{l4.matric}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
