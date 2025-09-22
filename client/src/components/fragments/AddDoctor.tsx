import React from "react";

function AddDoctor() {
  return (
    <div className="Add_Doctor_Container">
      <h1 className="title">All Doctors</h1>
      <div className="doctor_input_container">
        <div className="doctor_input">
          <div>
            <label htmlFor="username">Doctor Name</label>
            <input
              type="text"
              placeholder="Doctor Name"
              id="username"
            />
          </div>
          <div>
            <label htmlFor="email">Doctor Email</label>
            <input
              type="email"
              placeholder="Doctor Email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Doctor Password</label>
            <input
              type="text"
              placeholder="Doctor password"
              id="password"
            />
          </div>
        </div>
        <div className="doctor_input">
          <div>
            <label htmlFor="phone">Doctor Phone</label>
            <input
              type="text"
              placeholder="Doctor Phone"
              id="phone"
            />
          </div>
          <div>
            <label htmlFor="gender">Doctor Gender</label>
            <input
              type="text"
              placeholder="Doctor Gender"
              id="gender"
            />
          </div>
          <div>
            <label htmlFor="birthdate">Doctor Birthdate</label>
            <input
              type="text"
              placeholder="Doctor Birthdate"
              id="birthdate"
            />
          </div>
        </div>
        <div className="doctor_input">
          <div>
            <label htmlFor="">Education</label>
            <input
              type="text"
              placeholder="Education"
            />
          </div>
          <div>
            <label htmlFor="specialist">Speciality</label>
            <input
              type="text"
              placeholder="Speciality"
              id="specialist"
            />
          </div>
          <div>
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              placeholder="Experience"
              id="experience"
            />
          </div>
        </div>
        <div className="doctor_input">
          <div>
            <label htmlFor="fees">Fees</label>
            <input
              type="text"
              placeholder="fees"
              id="fees"
            />
          </div>
        </div>
        <div className="doctor_textArea">
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            placeholder="About"
          ></textarea>
        </div>
        <div className="create_doctor_container_btn">
          <button>Add doctor</button>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
