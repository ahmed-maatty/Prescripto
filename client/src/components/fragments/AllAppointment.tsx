import React from "react";
import { appointments } from "../json/appointment.json";

function AllAppointment() {
  return (
    <div className="All_Appointments_Dashboard">
      <h3 className="title">All Appointments</h3>
      <div className="appointment-cotainer">
        <div className="appointment_header">
          <div className="id_appointment">#</div>
          <div className="patient_appointment">Patient</div>
          <div className="department_appointment">Department</div>
          <div className="age_appointment">Age</div>
          <div className="time_appointment">Date & Time</div>
          <div className="doc_appointment">Doctor</div>
          <div className="fees_appointment">Fees</div>
        </div>
        {
          appointments.map((item, idx) => (
            <div className="appointment_header element" key={idx}>
              <div className="id_appointment">{item.id}</div>
              <div className="patient_appointment">{item.name}</div>
              <div className="department_appointment">{item.department}</div>
              <div className="age_appointment">{item.age}</div>
              <div className="time_appointment">{item.date}</div>
              <div className="doc_appointment">{item.doctor}</div>
              <div className="fees_appointment">{item.fees}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default AllAppointment;
