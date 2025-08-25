import React from "react";

function MainContent() {
  const appointments = [
    {
      img: "/assets/profile_img.svg",
      name: "Richard James",
      date: "Booking on 24th July, 2024",
    },
    {
      img: "/assets/profile_img.svg",
      name: "Richard James",
      date: "Booking on 24th July, 2024",
    },
    {
      img: "/assets/profile_img.svg",
      name: "Richard James",
      date: "Booking on 24th July, 2024",
    },
    {
      img: "/assets/profile_img.svg",
      name: "Richard James",
      date: "Booking on 24th July, 2024",
    },
    {
      img: "/assets/profile_img.svg",
      name: "Richard James",
      date: "Booking on 24th July, 2024",
    },
  ];

  return (
    <div className="MainContent">
      <div className="MainData">
        <div className="Data">
          <div>
            <img src="/assets/doctor_icon.svg" alt="" />
          </div>
          <div>
            <h4>14</h4>
            <p>Doctor</p>
          </div>
        </div>
        <div className="Data">
          <div>
            <img src="/assets/appointments_icon.svg" alt="" />
          </div>
          <div>
            <h4>2</h4>
            <p>Appointments</p>
          </div>
        </div>
        <div className="Data">
          <div>
            <img src="/assets/patients_icon.svg" alt="" />
          </div>
          <div>
            <h4>5</h4>
            <p>Patients</p>
          </div>
        </div>
      </div>
      <div className="Latest_Appointment">
        <h3>
          <img src="/assets/list_icon.svg" alt="" />
          Latest Appointment
        </h3>
        <div className="appointments">
          {appointments.map((appointment, idx) => (
            <div className="appointment" key={idx}>
              <div className="appointmentData">
                <div className="userImage">
                  <img src={appointment.img} alt="" />
                </div>
                <div className="userData">
                  <h3>{appointment.name}</h3>
                  <p>{appointment.date}</p>
                </div>
              </div>
              <div>
                <button className="cancel_btn">
                  <img src="/assets/cancel_icon.svg" alt="" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
