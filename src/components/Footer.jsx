import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="container">
        <div class="copyright">
          &copy; Copyright
          <strong>
            <span> Student Counter</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits ">
          <Link className=" text-decoration-none" href={""}>
            Designed
          </Link>{" "}
          by <a href="/"> Bala Jimmy Yakubu</a>
        </div>
        <div className="d-flex justify-content-end fixed-bottom">
          <Link href="/" className="scroll-back ">
            <i className=" bi bi-arrow-up btn  rounded-5"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}
