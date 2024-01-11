import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <div class="container">
        <div class="copyright">
          &copy; Copyright
          <strong>
            <span> Student Records</span>
          </strong>
          . All Rights Reserved
        </div>
        <div class="credits">
          <Link className=" text-decoration-none" href={'/instructor'}>Designed</Link> by <a href="/"> Bala Jimmy Yakubu</a>
        </div>
      </div>
    </footer>
  );
}
