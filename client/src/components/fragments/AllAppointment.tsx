import React, { useEffect } from "react";
import { appointments as jsonAppointment } from "../json/appointment.json";
import { useAppDispatch, useAppSelector } from "../hooks/dispatch.hook";
import { getAllAppointmentsFunc } from "../api/api/appointmentCall";

function AllAppointment() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllAppointmentsFunc());
  }, []);
  const apiAppointments = useAppSelector(
    (state) => state.appointment.appointments
  );
  const appointments = apiAppointments || jsonAppointment;
  console.log(appointments[0]);
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
        {appointments.map((item, idx) => (
          <div className="appointment_header element" key={idx}>
            <div className="id_appointment">{idx + 1}</div>
            <div className="patient_appointment">
              {item.name || item.patient?.username }
            </div>
            <div className="department_appointment">
              {item.department?.name || item.doctor?.specialist }
            </div>
            <div className="age_appointment">20</div>
            <div className="time_appointment">
              {item.date || `${item.day} , ${item.time}`}
            </div>
            <div className="doc_appointment">
              {item.doctor?.user?.username}
            </div>
            <div className="fees_appointment">
              {item.fees || item.doctor?.fees }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllAppointment;
