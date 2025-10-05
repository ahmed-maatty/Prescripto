import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../json/doctors.json";
import {
  doctor_appointments as appointment,
  times,
} from "../json/doctortimes.json";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

type Doctor = {
  specialization: string;
  degree: string;
  about: string;
  fee: string;
  experience: string;
  user: {
    username: string;
    profielPhoto: {
      url: string;
    };
  };
};

function DoctorDetails() {
  const { id } = useParams();
  const jsonDoctor = doctors[0];
  console.log(jsonDoctor);
  const [doctor, setDoctor] = useState<Doctor | any>({});
  const getDoctor = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/doctor/?id=${id}`);
      const data = await res.json();
      setDoctor(data.doctors[0]);
    } catch (err) {
      console.log(`error happens ${err}`);
      setDoctor(jsonDoctor);
    }
  };
  useEffect(() => {
    getDoctor();
  }, []);

  const [day, setDay] = useState("");
  const [time, setTime] = useState(null);

  const btnActivehandler = (btn, className: string) => {
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

  const bookHandler = async () => {
    if (!Cookies.get("token")) {
      return toast.error("Login First");
    }
    try {
      if (!day || !time) {
        return toast.error("Please, Enter Day And Time");
      }
      const res = await fetch(
        `http://localhost:8000/api/appointment/create/${id}`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
          body: JSON.stringify({ day, time }),
        }
      );
      const data = await res.json();
      toast.success(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="specia_doctor_section">
      <div className="doctor_info">
        <div className="doctor_Img">
          <img src={doctor.user?.profielPhoto?.url || doctor.image} alt="" />
        </div>
        <div className="doctor_data">
          <h1>{doctor.user?.username}</h1>
          <h4>
            {doctor?.degree} - {doctor?.specialization}{" "}
            <span>{doctor?.experience}</span>
          </h4>
          <p className="about">About</p>
          <p className="about-content">{doctor.about}</p>
          <p className="doctor-fee">
            Appointment fee: <span>{doctor.fee}</span>
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
        <button className="appointmentBtn" onClick={bookHandler}>
          Book an appointment
        </button>
      </div>
    </section>
  );
}

export default DoctorDetails;
