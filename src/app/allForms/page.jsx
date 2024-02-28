"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const [fullnames, setFullNames] = useState("");
  const [matric, setMatric] = useState("");
  const [level, setLevel] = useState("100L");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  const [submit, setSubmit] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmit(true)

    if (!fullnames || !matric || !level || !phone || !desc) {
      setError("All fields are necessary.");
      return;
    }

    if (matric.includes("KASU/") && matric.includes("CSC/")) {
      try {
        const resUserExists = await fetch("api/allExists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ matric }),
        });

        const { user } = await resUserExists.json();

        if (user) {
          setError("User already exists.");
          return;
        }

        const res = await fetch("api/allLevels", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullnames,
            matric,
            level,
            phone,
            desc,
          }),
        });

        if (res.ok) {
          const form = e.target;
          form.reset();
          router.push("/");
          router.refresh();
        } else {
          console.log("User registration failed.");
        }
      } catch (error) {
        console.log("Error during registration: ", error);
      }
    } else {
      setError("User not from KASU(CSC) or matric must be Upercase.");
      return;
    }
  };
  return (
    <section className="section-bg allForms">
      <div className="container">
        <div class="topic text-center">
          <h2>Welcome Back</h2>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-lg-6 align-self-start ">
            <div className="card  mt-3">
              <div className="card-body">
                <form
                  onSubmit={handleSubmit}
                  className=" align-items-center p-2  rounded"
                >
                  <h1 className=" text-center">100 Level Entry Page</h1>

                  <hr />
                  <div className="flex mb-4">
                    <div className="col-md-12">
                      <label className="">Fullnames</label>
                      <input
                        className="rounded-2 form-control shadow-none"
                        type="text"
                        onChange={(e) => setFullNames(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="">Matric</label>
                      <input
                        className="rounded-2 form-control shadow-none"
                        type="text"
                        onChange={(e) => setMatric(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="">Level</label>
                      <select
                        type="text"
                        className="rounded-2 form-control shadow-none"
                        onChange={(e) => setLevel(e.target.value)}
                      >
                        <option value="100L">100L</option>
                        <option value="200L">200L</option>
                        <option value="300L">300L</option>
                        <option value="400L">400L</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="">Phone</label>
                      <input
                        className="rounded-2 form-control shadow-none"
                        type="number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="">Desctiption</label>
                      <textarea
                        className="rounded-2 form-control shadow-none"
                        type="text"
                        rows={3}
                        onChange={(e) => setDesc(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                  {error && <p className=" text-center fw-bold">{error}</p>}
                  <div className=" d-flex justify-content-center">
                    <button
                      className="btn btn-submit fw-semibold"
                      type="submit"
                    >
                      {submit ? "Submitting..." : "Submit"}
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
