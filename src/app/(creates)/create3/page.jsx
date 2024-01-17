"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const [fullnames, setFullNames] = useState("");
  const [matric, setMatric] = useState("");
  const [level, setLevel] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullnames || !matric || !level || !phone || !desc) {
      setError("All fields are necessary.");
      return;
    }
    if (level != "300") {
      setError("User not from 300 Level.");
      return;
    }

    if (matric.includes("KASU") && matric.includes("CSC")) {
      try {
        const resUserExists = await fetch("api/exist3", {
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

        const res = await fetch("api/level3", {
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
          router.push("/#matric-cards");
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
                <form
                  onSubmit={handleSubmit}
                  className=" align-items-center p-2  rounded"
                >
                  <h1 className=" text-center">300 Level Entry Page</h1>
                  
                  <div className="flex mb-4">
                    <div className="col-md-12">
                      <label className="">Fullnames</label>
                      <input
                        className="rounded-2 border-info form-control shadow-none"
                        type="text"
                        placeholder="Fullnames"
                        onChange={(e) => setFullNames(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="">Matric</label>
                      <input
                        className="rounded-2 border-info form-control shadow-none"
                        type="text"
                        placeholder="Matric"
                        onChange={(e) => setMatric(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <div className="col-md-12">
                      <label className="">Level</label>
                      <input
                        type="text"
                        className="rounded-2 border-info form-control shadow-none"
                        placeholder="level"
                        onChange={(e) => setLevel(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="">Phone</label>
                      <input
                        className="rounded-2 border-info form-control shadow-none"
                        type="number"
                        placeholder="Contact Number"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="">Desctiption</label>
                      <input
                        className="rounded-2 border-info form-control shadow-none"
                        type="text"
                        placeholder="description"
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </div>
                  </div>
                  {error && <p className=" text-center fw-bold">{error}</p>}
                  <div className=" d-flex justify-content-center">
                    <button
                      className="btn btn-submit fw-semibold"
                      type="submit"
                    >
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
