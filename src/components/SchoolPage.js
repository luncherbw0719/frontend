import React, { useState } from "react";
import styled from "styled-components";
import { withAuth } from "./WithAuth";

import SchoolDonor from "./SchoolDonor";

const StyledCards = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: lightblue;
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
  font-family: "Arial Black"
  color: red;
`;

function SchoolPage(props) {
  const {
    name,
    location,
    currentFunds,
    fundGoal,
    schoolId,
    donors
  } = props.school;
  // same useState from form.js
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

  const fakeDonor = {
    name: "John",
    amount: 50,
    date: "7-31-2019"
  };
  const handleEdit = event => {
    setEditing(!editing);
  };
  // handleChange is form input
  const handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  // handleUpdate is update/editing school
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
    return (
      // editing existing schools
      <StyledCards>
        <div>
          <SchoolHeader>
            <div>{name}</div>
          </SchoolHeader>
          <LineSpacing>
            <div>{location}</div>
          </LineSpacing>

          <LineSpacing>
            <h3>Lunch Funding </h3>
            <div>Current: ${currentFunds}</div>
            <div>Fund Goal: ${fundGoal}</div>
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
    // Single School Page - An admin will be able to see their current funds and be able to add their needs for more funding, update and delete their profile and funding needs.
    return (
      <div className="school-page-form">
        <form onSubmit={handleUpdate}>
          <AddSchool>
            <h4>Edit</h4>
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
      // end of copy/paste from SchoolForm.js
    );
  }
}

export default withAuth(SchoolPage);
