import React from "react";

function Contact() {
  return (
    <section className="Contact_Section">
      <h1>
        {" "}
        CONTACT <span>Us</span>
      </h1>
      <div className="contact_content">
        <div className="contact_img">
          <img src={"/assets/contact_image.png"} alt="" />
        </div>
        <div className="contact_info">
          <h3>Our OFFICE</h3>
          <p>54709 Willms Station Suite 350,<br /> Washington, USA</p>
          <p>Tel: 020xxxxxxxxx </p>
          <p>Email: greatstackdev@gmail.com</p>
          <h3>Careers at PRESCRIPTO</h3>
          <p>Learn more about our teams and job openings.</p>
          <button>Explore Jobs</button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
