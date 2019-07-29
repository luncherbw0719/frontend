import React from "react";

import styled from "styled-components";

// Contains a list of schools who have requested financial needs for their students.
// Each school is laid out in a grid format, with the name of the school, physical address/location of the school and a requested amount of funds that the school needs in order to provide lunches for their students

const StyledCards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: lightcoral;
  padding: 2%;
  margin: 3%;
`;

function SchoolCard({
  schoolID,
  schoolName,
  schoolLocation,
  CurrentFunds,
  NeededFunds
}) {
  return (
    <StyledCards>
      <div className="school-card">
        <h3 className="schoolName">School: {schoolName} </h3>
        <h3 className="schoolID">ID: {schoolID} </h3>
        <h3 className="schoolLocation">Location: {schoolLocation} </h3>
        <h3 className="CurrentFunds">Current Funds: ${CurrentFunds} </h3>
        <h3 className="NeededFunds">Lunch Funding Needed: ${NeededFunds} </h3>
      </div>
    </StyledCards>
  );
}
export default SchoolCard;
