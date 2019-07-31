import React from 'react';
import SchoolPage from './SchoolPage'


function SchoolDonor({name, amount, date}) {
  return (
    <div className='donor-card'>
    <h1>Donors: </h1>
     <h3>Name: {name}</h3>,
     <h3>Amount: {amount}</h3>,
     <h3>Date: {date}</h3>,
    </div>
  );
};

export default SchoolDonor;