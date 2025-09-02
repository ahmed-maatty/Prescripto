import React, { useEffect, useState } from "react";
import { doctors as jsonDoctors } from "../json/doctors.json";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/dispatch.hook";
import { getAllDoctorFunc } from "../api/api/doctorCalls";

interface Iprops {
  Specialize?: string;
}

function BringDoctors({ Specialize }: Iprops) {
  
  const DBDoctors = useAppSelector((state) => state.doctor.doctors);
  console.log(DBDoctors);
  const dispatch = useAppDispatch();
  const [doctors] = useState(DBDoctors ? DBDoctors : jsonDoctors);
  const [filterDoctor, setFilter] = useState(doctors);

  useEffect(() => {
    dispatch(getAllDoctorFunc());
    if (Specialize) {
      const filteredDoctor = doctors.filter(
        (doc) => doc.specialization === Specialize || doc.specialist === Specialize
      );
      setFilter(filteredDoctor);
    }
  }, [Specialize]);
  return (
    <div className="bring_doctors">
      {filterDoctor.map((doctor, index) => (
        <Link to={`/doctor/${doctor.id}`} className="doctor" key={index}>
          <div className="doc_img">
            <img
              src={doctor?.user?.photo?.uri ?? doctor.image}
              alt={doctor.user?.username ?? doctor.name}
            />
          </div>
          <div className="doc_details">
            <p className="status">
              <span className="dot-green"></span> {doctor.status ?? "Unknown"}
            </p>
            <h3 className="doc_name">{doctor.user?.username ?? doctor.name}</h3>
            <p className="specialize">
              {doctor.specialist ?? doctor.specialization}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BringDoctors;
