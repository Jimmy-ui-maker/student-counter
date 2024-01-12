"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form3() {
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

    try {
      const resUserExists = await fetch("api/userExists", {
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
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };
  return (
    <>
      <div
        class="modal fade"
        id="form3"
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
                    <form
                      onSubmit={handleSubmit}
                      className=" align-items-center p-2  rounded"
                    >
                      <h1 className=" text-center">300 Level Entry Page</h1>
                      <hr />

                      <div className="flex mb-4">
                        <div className="col-md-12">
                          <label className="">Fullames</label>
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
                            className="rounded-2 border-info form-control shadow-none"
                            type="text"
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
                            placeholder="desc"
                            onChange={(e) => setDesc(e.target.value)}
                          />
                        </div>
                      </div>
                      {error && <div className=" text-danger">{error}</div>}
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
        </div>
      </div>
    </>
  );
}
