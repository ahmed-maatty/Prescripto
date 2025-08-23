import React, { useState } from "react";
import BringDoctors from "../fragments/BringDoctors";

function AllDoctors() {
  const [specialize, setSpecialize] = useState("");
  const sortHandler = (special: string, btn) => {
    setSpecialize(special);
    document
      .querySelectorAll(".specialization")
      .forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
  };

  return (
    <section className="All-Doctor">
      <div className="sort">
        <button
          className="specialization"
          value={"General physician"}
          onClick={(e) => sortHandler(e.target.value, e.target)}
        >
          General physician
        </button>
        <button
          className="specialization"
          value={"Gynecologist"}
          onClick={(e) => sortHandler(e.target.value, e.target)}
        >
          Gynecologist
        </button>
        <button
          className="specialization"
          value={"Dermatologist"}
          onClick={(e) => sortHandler(e.target.value, e.target)}
        >
          Dermatologist
        </button>
        <button
          className="specialization"
          value={"Pediatricians"}
          onClick={(e) => sortHandler(e.target.value, e.target)}
        >
          Pediatricians
        </button>
        <button
          className="specialization"
          value={"Neurologist"}
          onClick={(e) => sortHandler(e.target.value, e.target)}
        >
          Neurologist
        </button>
        <button
          className="specialization"
          value={"Gastroenterologist"}
          onClick={(e) => sortHandler(e.target.value, e.target)}
        >
          Gastroenterologist
        </button>
      </div>
      <div className="doctors">
        <BringDoctors Specialize={specialize} />
      </div>
    </section>
  );
}

export default AllDoctors;
