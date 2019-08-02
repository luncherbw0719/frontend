// Single School Page - An admin will be able to see their current funds and be able to add their needs
// for more funding, update and delete their profile and funding needs.
// This is the page that we connected to App.js
import React, { useState } from "react";
import styled from "styled-components";
import { withAuth } from "./WithAuth";

import SchoolDonor from "./SchoolDonor";
import { Progress } from "reactstrap";

// Styling with styled components
const StyledCards = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: #f2755c;
  width: 100%;
  padding: 2%;
  margin-top: 3%;
`;

const LineSpacing = styled.div`
  margin-top: 5%;
`;

const SchoolHeader = styled.div`
  font-family: "Arial Black";
  font-size: 1.5rem;
`;

const AddSchool = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  font-family: "Arial Black"
  color: red;
`;

// Passing props to display with same text style as backend
function SchoolPage(props) {
  const {
    name,
    location,
    currentFunds,
    fundGoal,
    schoolId,
    donors
  } = props.school;

  const [input, setInput] = useState({
    name: name,
    location: location,
    currentFunds: currentFunds,
    fundGoal: fundGoal,
    schoolId: schoolId,
    donors: donors
  });

  // create new useState for editing data
  const [editing, setEditing] = useState(false);

  // const fakeDonor = {
  //   name: "John",
  //   amount: 50,
  //   date: "7-31-2019"
  // };

  // handleChange is form input
  const handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  // Editing/updating existing schools
  const handleEdit = event => {
    setEditing(!editing);
  };

  const handleUpdate = event => {
    event.preventDefault();
    //props.update(input);
    setEditing(false);
    // const token = localStorage.getItem("token");
    //     axios
    //     .put(
    //       "https://schooldonations-luncher.herokuapp.com/schools/school/{schoolid}",
    //       input,
    //       { headers: { Authorization: `Bearer ${token}` } }
    //     )
    //     .then(res => {
    //       console.log("succes", res);
    //     })
    //     .catch(err => console.log("err", err.res));
    // };
  };

  console.log("edit", editing);

  if (editing === false) {
    // If nothing is being edited, return this (how it originally shows up on school dashboard)
    return (
      <StyledCards>
        <div>
          <SchoolHeader>
            <div>{name}</div>
          </SchoolHeader>
          <LineSpacing>
            <div>{location}</div>
          </LineSpacing>

          <LineSpacing>
            <h3>Lunch Funding Status </h3>
            <div>
              Raised ${currentFunds} of ${fundGoal}
            </div>
            <LineSpacing>
              <div>
                <Progress
                  color="info"
                  value={Math.round((currentFunds / fundGoal) * 100)}
                >
                  {Math.round((currentFunds / fundGoal) * 100)}%
                </Progress>{" "}
              </div>
            </LineSpacing>
          </LineSpacing>
          <div>
            {donors.map(donor => (
              <SchoolDonor key={donor.id} donor={donor} />
            ))}
          </div>

          <LineSpacing>
            <button onClick={handleEdit}>Edit School</button>
            {/* {props.dashboard ? <button onClick={handleEdit}>Edit School</button> : null} */}
          </LineSpacing>
        </div>
      </StyledCards>
    );
  } else {
    // If the form is being edited, return this (this is for the school admin to go in an change their school's info)

    return (
      <StyledCards>
        <div className="school-page-form">
          <form onSubmit={handleUpdate}>
            <AddSchool>
              <h1>Edit School Info</h1>
            </AddSchool>
            <label htmlFor="name">
              School:{" "}
              <input
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="location">
              Location:{" "}
              <input
                type="text"
                name="location"
                value={input.location}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="currentFunds">
              Current Funds: ${" "}
              <input
                type="number"
                name="currentFunds"
                value={input.currentFunds}
                onChange={handleChange}
              />
            </label>
            <label htmlFor="fundGoal">
              Fund Goal: ${" "}
              <input
                type="number"
                name="fundGoal"
                value={input.fundGoal}
                onChange={handleChange}
              />
            </label>
            <button>Submit!</button>
          </form>
        </div>
      </StyledCards>
    );
  }
}

export default withAuth(SchoolPage);
