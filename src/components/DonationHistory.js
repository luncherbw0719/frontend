import React from "react";
import Donation from "./Donation";

function DonationHistory(props) {
  const donations = [
    {
      name: "Squidward",
      amount: "10000"
    },
    {
      name: "Patrick",
      amount: "2500"
    }
  ];
  return (
    <div className="donation-history">
      <h1>Donations: </h1>
      {donations.map(donation => {
        return <Donation donation={donation} />;
      })}
    </div>
  );
}

export default DonationHistory;
