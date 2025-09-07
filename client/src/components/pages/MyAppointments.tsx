import React from "react";

function MyAppointments() {
  return (
    <section className="MyAppointments">
      <h1>My appointments</h1>
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
              <p>Date & Time: 25, July, 2024 |  8:30 PM</p>
            </div>
          </div>
          <button>Cancel appointment</button>
        </div>
      </div>
    </section>
  );
}

export default MyAppointments;
