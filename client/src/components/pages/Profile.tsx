import React from "react";

function Profile() {
  return (
    <section className="Profile">
      <div className="user_Image">
        <img src="/assets/User.png" alt="" />
      </div>
      <div className="Personal_Data">
        <h1 className="userName">Edward Vincent</h1>
        <div className="contact_information">
          <p>CONTACT INFORMATION</p>
          <div className="contact_method">
            <p>Email : </p>
            <p>richardjameswap@gmail.com</p>
          </div>
          <div className="contact_method">
            <p>Phone : </p>
            <p>+1 123 456 7890</p>
          </div>
          <div className="contact_method">
            <p>Address : </p>
            <p>57th Cross, Richmond Circle, Church Road, London</p>
          </div>
        </div>
        <div className="contact_information">
          <p>BASIC INFORMATION</p>
          <div className="contact_method">
            <p>Gender : </p>
            <p>Male</p>
          </div>
          <div className="contact_method">
            <p>Birthday : </p>
            <p>20 July, 2024</p>
          </div>
        </div>
      </div>
      <div className="profileButtons">
        <button>Edit</button>
        <button>Save information</button>
      </div>
    </section>
  );
}

export default Profile;
