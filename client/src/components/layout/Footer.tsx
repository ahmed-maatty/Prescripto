import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer_data">
        <div className="footer_desc">
          <div className="footer_logo">
            <img src="/assets/Logo.png" alt="" />
            <h1>Prescripto</h1>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="footer_links">
          <h1>COMPANY</h1>
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About us</Link>
            <Link to={"/all-doctors"}>Contact us</Link>
            <Link to={"/"}>Privacy policy</Link>
          </div>
        </div>
        <div className="footer_contact">
          <h1>GET IN TOUCH</h1>
          <div className="links">
            <Link to={"/"}>+1-212-456-7890</Link>
            <Link to={"/"}>greatstackdev@gmail.com</Link>
          </div>
        </div>
      </div>
      <div className="copy_write">
        <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
