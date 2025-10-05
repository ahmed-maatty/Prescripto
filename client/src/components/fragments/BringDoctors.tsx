import React, { useEffect, useState } from "react";
import { doctors as jsonDoctors } from "../json/doctors.json";
import { Link } from "react-router-dom";

interface Iprops {
  Specialize?: string;
}

function BringDoctors({ Specialize }: Iprops) {
  const [doctors, setDoctors] = useState<any[]>([]);

  const getApiDoctor = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/doctor/");
      const { doctors } = await res.json();
      setDoctors(doctors);
      console.log("Doctors from API:", doctors);
    } catch (err) {
      console.error("Error fetching doctors:", err);
      setDoctors(jsonDoctors);
    }
  };

  useEffect(() => {
    getApiDoctor();
  }, []);

  useEffect(() => {
    if (Specialize) {
      setDoctors((prev) =>
        prev.filter((doc) => doc.specialization === Specialize)
      );
    } else {
      getApiDoctor();
    }
  }, [Specialize]);

  return (
    <div className="bring_doctors">
      {doctors.map((doctor, index) => (
        <Link to={`/doctor/${doctor._id}`} className="doctor" key={index}>
          <div className="doc_img">
            <img
              src={doctor.image || doctor.user?.profielPhoto?.url}
              alt={doctor.name}
            />
          </div>
          <div className="doc_details">
            <p className="status">
              <span className="dot-green"></span> {doctor.status ?? "Available"}
            </p>
            <h3 className="doc_name">{doctor.name || doctor.user?.username}</h3>
            <p className="specialize">{doctor.specialization}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BringDoctors;
