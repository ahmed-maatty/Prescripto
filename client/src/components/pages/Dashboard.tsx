import React, { useState } from 'react'
import MainContent from '../fragments/MainDashboard';
import AllAppointment from '../fragments/AllAppointment';
import DoctorList from "../fragments/DoctorList";
import AddDoctor from '../fragments/AddDoctor';

function Dashboard() {
  const [Content , setContent] = useState("Dashboard");
  const asideHandler = (e) => {
    setContent(e.target.id);
    document.querySelectorAll(".aside_dashboard ul li").forEach(item => {
      item.classList.remove("active");
    })
    e.target.classList.add("active");
  }

  return (
    <section className='Dashboard'>
      <div className="aside_dashboard">
        <ul>
          <li className='active' id='Dashboard' onClick={asideHandler}>
            <img src="/assets/dashboard-icon.png" alt="" />
            Dashboard
          </li>
          <li id='Appointment' onClick={asideHandler}>
            <img src="/assets/appointment-icon.png" alt="" />
            Appointments
          </li>
          <li id='AddDoctor' onClick={asideHandler}>
            <img src="/assets/add-doctor-icon.png" alt="" />
            Add Doctor
          </li>
          <li id='DoctorList' onClick={asideHandler}>
            <img src="/assets/doctor-icon.png" alt="" />
            Doctors List
          </li>
        </ul>
      </div>
      <div className="aside_content">
        {
          (Content === "Dashboard" && <MainContent />)
        }
        {
          (Content === "Appointment" && <AllAppointment />)
        }
        {
          (Content === "DoctorList" && <DoctorList />)
        }
        {
          (Content === "AddDoctor" && <AddDoctor />)
        }
      </div>
    </section>
  )
}

export default Dashboard