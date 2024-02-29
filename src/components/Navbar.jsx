import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-md shadow-sm py-1"
    >
      <div className="container">
        <img
          src="/kasu/kasulogo.png"
          className=" rounded-2"
          width={40}
          height={30}
          alt=""
        />
        <Link href="/" className="navbar-brand fw-bolder text-uppercase">
        Student's Counter
        </Link>
        <button
          className="navbar-toggler shadow-none  border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon icons"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link fw-bold">
                Home
              </a>
            </li>
            
            <li className="nav-item">
              <a href="#admin-cards" className="nav-link fw-bold">
                Levels
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
