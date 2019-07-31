import React, { useState, useEffect } from "react";
import SchoolCard from "./SchoolCard";

import axios from "axios";

export default function SchoolBrowse() {
  const [schools, setSchools] = useState([
    {
      schoolName: "Oxford Academy",
      image: 'url',
      schoolLocation: "Kuwait City",
      currentFunds: 1000
    }
  ]);

  // useEffect(() => {
  //   axios
  //     .get("https://schooldonations-luncher.herokuapp.com/schools/schools")

  //     .then(res => {
  //       setSchools(res.data.results);
  //     })

  //     .catch(err => console.log("Error Msg", err));
  // }, []);

  return (
    <section>
      <header>
        <h1>Browse Schools</h1>
      </header>

      <div class="schoolcards">
        3
        {schools.map(school => (
          <SchoolCard {...school} />
        ))}
      </div>
    </section>
  );
}
