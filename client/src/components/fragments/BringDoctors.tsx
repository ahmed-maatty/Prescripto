import React, { useEffect, useState } from "react";
import { doctors } from "../json/doctors.json";

interface Iprops {
  Specialize?: string;
}

function BringDoctors({ Specialize }: Iprops) {
  const [filterDoctor, setFilter] = useState(doctors);
  useEffect(() => {
    if (Specialize) {
      const filteredDoctor = doctors.filter(
        (doc) => doc.specialization === Specialize
      );
      setFilter(filteredDoctor);
    }
  }, [Specialize]);
  return (
    <div className="bring_doctors">
      {filterDoctor.map((doctor, index) => (
        <div className="doctor" key={index}>
          <div className="doc_img">
            <img
              src={doctor.image ?? "/default-image.png"}
              alt={doctor.name ?? "Doctor"}
            />
          </div>
          <div className="doc_details">
            <p className="status">
              <span className="dot-green"></span> {doctor.status ?? "Unknown"}
            </p>
            <h3 className="doc_name">{doctor.name ?? "No Name"}</h3>
            <p className="specialize">
              {doctor.specialization ?? "Not specified"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BringDoctors;
