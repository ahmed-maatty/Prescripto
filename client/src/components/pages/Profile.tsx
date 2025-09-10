import React from "react";
import { useAppSelector } from "../hooks/dispatch.hook";

function Profile() {
  const {username , email , phone , photo , birthdate , gender } = useAppSelector(state => state.auth.user);
  return (
    <section className="Profile">
      <div className="user_Image">
        <img src={photo?.uri || "/assets/User.png"} alt="" />
      </div>
      <div className="Personal_Data">
        <h1 className="userName">{username || "Edward Vincent"}</h1>
        <div className="contact_information">
          <p>CONTACT INFORMATION</p>
          <div className="contact_method">
            <p>Email : </p>
            <p>{email || "richardjameswap@gmail.com"}</p>
          </div>
          <div className="contact_method">
            <p>Phone : </p>
            <p>{phone || "+1 123 456 7890"}</p>
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
            <p>{gender || "Male"}</p>
          </div>
          <div className="contact_method">
            <p>Birthday : </p>
            <p>{birthdate || "20 July, 2024"}</p>
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
