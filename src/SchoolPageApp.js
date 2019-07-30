import React, { useState } from "react";
import "./App.css";

import SchoolForm from "./components/SchoolForm"
import SchoolPage from "./components/SchoolPage"

function SchoolPageApp() {
    // Create new useState for members
    const [schools, setSchools] = useState([]);
    // Applying to Form component (be sure to use spread operator for members)
    const submitSchool = school => setSchools([...schools, school]);
    // Applying to TeamMember component (mapping over state to render team members)
    const update = newSchool =>
      setSchools([
        // map over each member in the array, return each unique value in that array - need to add id to components useState to give each unique dataset a value
        ...schools.map(school => {
          if (school.id === newSchool.id) {
            return newSchool;
          }
          return school;
        })
      ]);
  
    console.log("schools", schools);
  
    return (
      <div className="school-page-app">
        <header className="school-page-app-header">
         
        {schools.map((school, index) => (
          <SchoolPage school={school} key={index} update={update} />
        ))}
        <SchoolForm add={submitSchool} />
      </header>
    </div>
  );
}

export default SchoolPageApp; 