import React from "react";
const Donation = props => {
  return (
    <div>
      {props.donation.name}
      {props.donation.amount}
    </div>
  );
};
export default Donation;
