import React, { useState } from 'react';
import './App.css';

import Data from './Data/DoctorsData'
import DoctorCard from './Components/DoctorCard/DoctorCard';
import Navbar from './Components/Navbar/Navbar';
import PatientCard from './Components/PatientCard/PatientCard';

function App() {
  return (
    <div className='Container'>
      <Navbar/>
      <div className='SubContainer'>
        <div className='LeftContainter'>
          <div className='ContainerHeading'>Doctor's List:</div>
          <div className='DoctorsList'>
            {Data.map(doctor => {
              return (
                <DoctorCard doctor={doctor}/>
              )
            })}
          </div>
        </div>

        <div className='RightContainer'>
          <div className='ContainerHeading'>Dr. Rupesh's Patient List:</div>
          <div className='PatientsList'>
            {Data[0].patients.map(patient => {
              return (
                <PatientCard patient={patient}/>
              )
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
