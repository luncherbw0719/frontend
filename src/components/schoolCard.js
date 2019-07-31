import React from 'react';
import { Card } from 'semantic-ui-react';

 export default function SchoolCard (props) {
    return (
      
        <Card
        header={props.schoolName}
        image={props.schoolID}
        meta={props.schoolLocation}
        description= "$"{...props.currentFunds}
         />
          );
        }

        function SchoolCard({
            schoolID,
            schoolName,
            schoolLocation,
            CurrentFunds,
            NeededFunds
          }) {
            return (
              <StyledCards>
                <div className="SchoolCard">
                  <h3 >School: {schoolName} </h3>
                  <h3 >ID: {schoolID} </h3>
                  <h3 >Location: {schoolLocation} </h3>
                  <h3 >Current Funds: ${CurrentFunds} </h3>
                  <h3 >Lunch Funding Needed: ${NeededFunds} </h3>
                </div>
              </StyledCards>
            );