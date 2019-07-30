// Single School Page - An admin will be able to see their current funds and be able to add their needs for more funding, update and delete their profile and funding needs.
// (add, edit, and delete school page for school admins)

import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const AddSchool = styled.h1`
  margin-top: 5%;
  font-family: "Arial Black";
`;

function SchoolForm(props) {
  const [input, setInput] = useState({
    name: " ",
    location: " ",
    currentfunds: 0,
    neededfunds: 0,
    //no api add id manualy
    schoolid: null
  });
  // form input
  const handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);

    setInput({
      ...input,
      [event.target.name]:
        event.target.type === "number"
          ? parseInt(event.target.value)
          : event.target.value
    });
  };
  // form submission
  const handleSubmit = event => {
    event.preventDefault();
    console.log(input.name);
    console.log(input.location);
    console.log(input.currentfunds);
    console.log(input.neededfunds);
    props.add(input);
    setInput({
      name: " ",
      location: " ",
      currentfunds: " ",
      neededfunds: " ",
      schoolid: null
    });
  };
  console.log("props", props);
  console.log("input", input);
  return (
    <div className="school-page-form">
      <form onSubmit={handleSubmit}>
        <AddSchool>Add School</AddSchool>
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
        <label htmlFor="currentfunds">
          Current Funds: ${" "}
          <input
            type="number"
            name="currentfunds"
            value={input.currentfunds}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="neededfunds">
          Needed Funds: ${" "}
          <input
            type="number"
            name="neededfunds"
            value={input.neededfunds}
            onChange={handleChange}
          />
        </label>
        <button>Submit!</button>
      </form>
    </div>
  );
}

export default SchoolForm;
