import React, { useState, useEffect } from "react";
// import "./App.css";

import SchoolForm from "../components/SchoolForm";
import SchoolPage from "../components/SchoolPage";
import axios from "axios";

function SchoolPageApp() {
  // Create new useState for members
  const [schools, setSchools] = useState([]);
  // Applying to Form component (be sure to use spread operator for members)
  const submitSchool = school => {
    const token = localStorage.getItem("token");
    axios
      .post(
        "https://schooldonations-luncher.herokuapp.com/schools/school/add",
        school,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(res => {
        console.log("succes", res);
      })
      .catch(err => console.log("err", err.res));
  };
  // Applying to TeamMember component (mapping over state to render team members)
  const update = newSchool =>
    setSchools([
      // map over each member in the array, return each unique value in that array - need to add id to components useState to give each unique dataset a value
      ...schools.map(school => {
        if (school.schoolid === newSchool.schoolid) {
          return newSchool;
        }
        return school;
      })
    ]);

  console.log("schools", schools);

  const login = () => {
    let credentials = `grant_type=password&username=admin&password=password`;
    //dispatch({ type: LOGIN_START });
    axios
      .post(
        "https://schooldonations-luncher.herokuapp.com/login",
        credentials,
        {
          headers: {
            Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.access_token);
        //dispatch({ type: LOGIN_SUCCESS });
      })
      .catch(err => console.log("ERROR", err));
  };

  //use effect to get schools from api WORKING!!

  useEffect(() => {
    axios
      .get(
        "https://schooldonations-luncher.herokuapp.com/schools/schools?size=1000"
      )
      .then(res => setSchools(res.data))
      .catch(err => console.log("err", err));
  });
  return (
    <div className="school-page-app">
      <header className="school-page-app-header">
        <SchoolForm add={submitSchool} />
        {schools.map((school, index) => (
          <SchoolPage school={school} key={index} update={update} />
        ))}
      </header>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default SchoolPageApp;
