import React from "react";
import RegisterBtn from "../fragments/RegisterBtn";
import { doctors } from "../json/doctors.json";
import { Link } from "react-router-dom";

function Home() {
  const speciality = [
    { img: "/assets/General_physician.svg", txt: "General physician" },
    { img: "/assets/Gynecologist.svg", txt: "Gynecologist" },
    { img: "/assets/Dermatologist.svg", txt: "Dermatologist" },
    { img: "/assets/Pediatricians.svg", txt: "Pediatricians" },
    { img: "/assets/Neurologist.svg", txt: "Neurologist" },
    { img: "/assets/Gastroenterologist.svg", txt: "Gastroenterologist" },
  ];
  return (
    <section className="Home">
      <div className="Hero">
        <div className="hero_desc">
          <h1>
            Book Appointment <br /> With Trusted Doctors
          </h1>
          <p>
            <img src="/assets/group_profiles.png" alt="" />
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free.
          </p>
          <RegisterBtn
            btnColor="white"
            btnTxt="Book an appointment"
            txtColor="#595959"
          />
        </div>
        <div className="hero_img">
          <img src="/assets/doc-header-img.png" alt="" />
        </div>
      </div>
      <div className="Specility">
        <div className="section_title">
          <h2>Find by Speciality</h2>
          <p>
            Simply browse through our extensive list of trusted doctors,
            schedule
            <br />
            your appointment hassle-free.
          </p>
        </div>
        <div className="speciality-content">
          {speciality.map((item, index) => (
            <div key={index}>
              <img src={item.img} alt="" />
              <p>{item.txt}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="Doctors">
        <div className="section_title">
          <h2>Top Doctors to Book</h2>
          <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div className="doctors_content">
          {doctors.map((doctor, index) => (
            <div className="doctor" key={index}>
              <div className="doc_img">
                <img src={doctor.image} alt="" />
              </div>
              <div className="doc_details">
                <p className="status">
                  {" "}
                  <span className="dot-green"></span> {doctor.status}
                </p>
                <h3 className="doc_name">{doctor.name}</h3>
                <p className="specialize">{doctor.specialization}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to={"all-doctors"} className="more-doctors-btn">
          More
        </Link>
      </div>
      <div className="BookNow">
        <div className="details">
          <h1>
            Book Appointment <br /> With 100+ Trusted Doctors
          </h1>
          <RegisterBtn
            btnColor={"white"}
            btnTxt="Create account"
            txtColor="#4B5563"
          />
        </div>
        <div className="book_image">
          <img src="/assets/appointment-doc-img.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
