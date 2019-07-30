// Might not use SchoolList or SchoolCard components (using Margaret's browse schools components instead)

import React, { useState, useEffect } from "react";

import axios from "axios";

import SchoolCard from "./SchoolCard";

function SchoolList(props) {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    axios
      .get("https://schooldonations-luncher.herokuapp.com/schools/schools")
      .then(response => {
        console.log("Component mounted, data = ", response.data.results);

        setSchools(response.data.results);
      })

      .catch(error => {
        console.error("no bueno", error);
      });
  }, []);
  return (
    <section className="school-list">
      {schools.map(school => {
        return <SchoolCard key={school.id} {...school} />;
      })}
    </section>
  );
}

export default SchoolList;
