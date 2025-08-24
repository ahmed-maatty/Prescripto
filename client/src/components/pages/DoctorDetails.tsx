import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../json/doctors.json";

type doctorData = {
  id: number;
  name: string;
  specialization: string;
  status: string;
  image: string;
  about:string;
  degree:string;
  fee:string;
  experience:string;
}

function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState<doctorData | null >(null);
  useEffect(() => {
    const doc : doctorData = doctors.filter((doc) => doc.id === Number(id))[0];
    setDoctor(doc);
  }, []);
  return (
    <section className="specia_doctor_section">
      <div className="doctor_info">
        <div className="doctor_Img">
          <img src={doctor?.image} alt="" />
        </div>
        <div className="doctor_data">
          <h1>{doctor?.name}</h1>
          <h4>{doctor?.degree} - {doctor?.specialization} <span>{doctor?.experience}</span></h4>
          <p className="about">About</p>
          <p className="about-content">{doctor?.about}</p>
          <p className="doctor-fee">Appointment fee: <span>{doctor?.fee}</span></p>
        </div>
      </div>
    </section>
  );
}

export default DoctorDetails;
