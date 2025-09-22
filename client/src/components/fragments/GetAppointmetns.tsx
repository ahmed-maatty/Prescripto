import React from "react";
import { appointments } from "../json/appointment.json";

function GetAppointments() {
  return (
    <>
      {appointments.map((item, idx) => (
        <div className="appointments" key={idx}>
          <div className="appointment">
            <div className="doc_Info">
              <div className="docImg">
                <img src="/assets/doctor1.png" alt="" />
              </div>
              <div className="docData">
                <h5>{item.doctor}</h5>
                <p>{item.department}</p>
                <h5>Address:</h5>
                <p>57th Cross, Richmond Circle, Church Road, London</p>
                <p>Date & Time : {item.date}</p>
              </div>
            </div>
            <button>Cancel appointment</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default GetAppointments;
