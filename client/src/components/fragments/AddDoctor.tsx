import React, { useState } from "react";
import { createDoctorFunc } from "../api/api/doctorCalls";
import { useAppDispatch } from "../hooks/dispatch.hook";

function AddDoctor() {
  const [Data, SetData] = useState({});
  const setDoctorData = (key: string, value: string) => {
    SetData((prev) => ({ ...prev, [`${key}`]: value }));
  };
  const dispatch = useAppDispatch()
  const addDoctorHandler = () => {
    dispatch(createDoctorFunc(Data))
    console.log(Data)
  }
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
              onChange={(e) => setDoctorData(e.target.id, e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Doctor Email</label>
            <input
              type="email"
              placeholder="Doctor Email"
              id="email"
              onChange={(e) => setDoctorData(e.target.id, e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Doctor Password</label>
            <input
              type="text"
              placeholder="Doctor password"
              id="password"
              onChange={(e) => setDoctorData(e.target.id, e.target.value)}
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
              onChange={(e) => setDoctorData(e.target.id, e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="gender">Doctor Gender</label>
            <input
              type="text"
              placeholder="Doctor Gender"
              id="gender"
              onChange={(e) => setDoctorData(e.target.id, e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="birthdate">Doctor Birthdate</label>
            <input
              type="text"
              placeholder="Doctor Birthdate"
              id="birthdate"
              onChange={(e) => setDoctorData(e.target.id, e.target.value)}
            />
          </div>
        </div>
        <div className="doctor_input">
          <div>
            <label htmlFor="">Education</label>
            <input
              type="text"
              placeholder="Education"
              onChange={(e) => setDoctorData(e.target.id, e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="specialist">Speciality</label>
            <input
              type="text"
              placeholder="Speciality"
              id="specialist"
              onChange={(e) => setDoctorData(e.target.id, e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="experience">Experience</label>
            <input
              type="text"
              placeholder="Experience"
              id="experience"
              onChange={(e) => setDoctorData(e.target.id, e.target.value)}
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
              onChange={(e) => setDoctorData(e.target.id, e.target.value)}
            />
          </div>
        </div>
        <div className="doctor_textArea">
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            placeholder="About"
            onChange={(e) => setDoctorData(e.target.id, e.target.value)}
          ></textarea>
        </div>
        <div className="create_doctor_container_btn">
          <button onClick={() => addDoctorHandler()}>Add doctor</button>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
