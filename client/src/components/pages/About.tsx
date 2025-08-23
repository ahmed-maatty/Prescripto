import React from "react";

function About() {
  return (
    <section className="About">
      <h1>
        About <span>Us</span>
      </h1>
      <div className="about-contact">
        <div className="aboutImg">
          <img src="/assets/about_image.png" alt="" />
        </div>
        <div className="abou-main">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <h6>Our Vision</h6>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="whyUs">
        <p>
          Why <span> Choose Us </span>{" "}
        </p>
        <div className="table">
          <div>
              <h5>Efficiency:</h5>
              <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className="middle">
              <h5>Convenience:</h5>
              <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div>
              <h5>Personalization:</h5>
              <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
