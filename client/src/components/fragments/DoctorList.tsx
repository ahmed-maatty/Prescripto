import React from 'react'
import BringDoctors from './BringDoctors'

function DoctorList() {
  return (
    <div className='DoctorList_Container'>
      <h1 className='title'>All Doctors</h1>
      <BringDoctors />
    </div>
  )
}

export default DoctorList