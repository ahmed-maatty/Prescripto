import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/dispatch.hook";
import {
  cancelAppointmentFunc,
  getAllAppointmentsFunc,
} from "../api/api/appointmentCall";

function GetAppointments() {
  const [myDates, setMyDates] = useState(null);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllAppointmentsFunc());
  }, []);

  const { appointments } = useAppSelector((state) => state.appointment);
  useEffect(() => {
    setMyDates(appointments);
  }, [appointments]);

  const { user } = useAppSelector((state) => state.auth);

  const cancelAppoinment = (id: string) => {
    dispatch(cancelAppointmentFunc(id));
  };

  return (
    <>
      {appointments?.length > 0 ? (
        myDates
          ?.filter((item) => item.patient.id === user?.id)
          .map((item, idx) => (
            <div className="appointments" key={idx}>
              <div className="appointment">
                <div className="doc_Info">
                  <div className="docImg">
                    <img src="/assets/doctor1.png" alt="" />
                  </div>
                  <div className="docData">
                    <h5>{item.doctor?.user?.username}</h5>
                    <p>{item.doctor?.specialist}</p>
                    <h5>Address:</h5>
                    <p>57th Cross, Richmond Circle, Church Road, London</p>
                    <p>
                      Date & Time : {item.day} | {item.time}
                    </p>
                  </div>
                </div>
                <button onClick={() => cancelAppoinment(item.id)}>
                  Cancel appointment
                </button>
              </div>
            </div>
          ))
      ) : (
        <div className="appointments">
          <div className="appointment">
            <div className="doc_Info">
              <div className="docImg">
                <img src="/assets/doctor1.png" alt="" />
              </div>
              <div className="docData">
                <h5>Dr. Richard James</h5>
                <p>General physician</p>
                <h5>Address:</h5>
                <p>57th Cross, Richmond Circle, Church Road, London</p>
                <p>Date & Time: 25, July, 2024 | 8:30 PM</p>
              </div>
            </div>
            <button>Cancel appointment</button>
          </div>
        </div>
      )}
    </>
  );
}

export default GetAppointments;
