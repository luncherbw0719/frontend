import React from 'react';
import './styles/SchoolCard.scss';

const SchoolCard = props => {
  return (
    <div className='school-card'>
      <h1>School:{props.schoolName}</h1>
      <h2>School ID:{props.schoolID}</h2>
      <h3>Location:{props.schoolLocation}</h3>
      <h3>Current Funds:{props.CurrentFunds}</h3>
      <h3>Funds Needed:{props.NeededFunds}</h3>
    </div>
  );
};

export default SchoolCard;