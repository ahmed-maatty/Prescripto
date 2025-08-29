import React from "react";

function AddDoctor() {
  return (
    <div className="Add_Doctor_Container">
      <h1 className="title">All Doctors</h1>
      <div className="doctor_input_container">
        <div className="doctor_input">
          <div>
            <label htmlFor="">Doctor name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="">Speciality</label>
            <input type="text" placeholder="Speciality"/>
          </div>
          <div>
            <label htmlFor="">Doctor Email</label>
            <input type="email" placeholder="Doctor Email"/>
          </div>
        </div>
        <div className="doctor_input">
          <div>
            <label htmlFor="">Education</label>
            <input type="text" placeholder="Education" />
          </div>
          <div>
            <label htmlFor="">Doctor Password</label>
            <input type="text" placeholder="Doctor Password"/>
          </div>
          <div>
            <label htmlFor="">Address</label>
            <input type="text" placeholder="Address" />
          </div>
        </div>
        <div className="doctor_input">
          <div>
            <label htmlFor="">Experience</label>
            <input type="text" placeholder="Experience" />
          </div>
          <div>
            <label htmlFor="">Fees</label>
            <input type="text" placeholder="fees" />
          </div>
        </div>
        <div className="doctor_textArea">
            <label htmlFor="">About</label>
            <textarea name="" id="" placeholder="About"></textarea>
        </div>
        <div className="create_doctor_container_btn">
          <button>Add doctor</button>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
