import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../json/doctors.json";
import {
  doctor_appointments as appointment,
  times,
} from "../json/doctortimes.json";
import { useAppDispatch, useAppSelector } from "../hooks/dispatch.hook";
import { makeAppointmentFunc } from "../api/api/appointmentCall";

type doctorData = {
  id: number;
  name: string;
  specialization: string;
  status: string;
  image: string;
  about: string;
  degree: string;
  fee: string;
  experience: string;
};

function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState<doctorData | null>(null);
  useEffect(() => {
    const doc: doctorData = doctors.filter((doc) => doc.id === Number(id))[0];
    setDoctor(doc);
  }, []);

  const [day, setDay] = useState("");
  const [time, setTime] = useState(null);
  const dispatch = useAppDispatch();

  const btnActivehandler = (btn, className) => {
    document
      .querySelectorAll(className)
      .forEach((e) => e.classList.remove("active"));
    btn.classList.add("active");
    if (btn.classList.contains("doctor_time")) {
      setTime(btn.innerHTML);
    } else {
      setDay(`${btn.children[0].innerHTML} ${btn.children[1].innerHTML}`);
    }
  };

  const appointmentHandler = () => {
    dispatch(makeAppointmentFunc({ day, time }, id));
  };

  return (
    <section className="specia_doctor_section">
      <div className="doctor_info">
        <div className="doctor_Img">
          <img src={doctor?.image} alt="" />
        </div>
        <div className="doctor_data">
          <h1>{doctor?.name}</h1>
          <h4>
            {doctor?.degree} - {doctor?.specialization}{" "}
            <span>{doctor?.experience}</span>
          </h4>
          <p className="about">About</p>
          <p className="about-content">{doctor?.about}</p>
          <p className="doctor-fee">
            Appointment fee: <span>{doctor?.fee}</span>
          </p>
        </div>
      </div>
      <div className="Booking_Slot">
        <h2>Booking slots</h2>
        <div className="doctor_dates">
          {appointment.map((item, idx) => (
            <button
              className="doctor_date"
              key={idx}
              onClick={(e) => btnActivehandler(e.currentTarget, ".doctor_date")}
            >
              <h6>{item.day}</h6>
              <p>{item.dayDate}</p>
            </button>
          ))}
        </div>
        <div className="doctor_times">
          {times.map((item, idx) => (
            <button
              className="doctor_time"
              key={idx}
              onClick={(e) => btnActivehandler(e.currentTarget, ".doctor_time")}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="appointmentBtn" onClick={appointmentHandler}>
          Book an appointment
        </button>
      </div>
    </section>
  );
}

export default DoctorDetails;
