// Single School Page - An admin will be able to see their current funds and be able to add their needs for more funding, update and delete their profile and funding needs.
// (add, edit, and delete school page for school admins)

import React, { useState } from "react";

function SchoolForm(props) {
  const [input, setInput] = useState({
      schoolName: " ",
      schoolLocation: " ",
      CurrentFunds: " ",
      NeededFunds: " ",
      schoolID: null,
  });
  // form input
  const handleChange = event => {
    console.log(event.target.schoolName);
    console.log(event.target.value);
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  // form submission
  const handleSubmit = event => {
    event.preventDefault();
    console.log(input.schoolName);
    console.log(input.schoolLocation);
    console.log(input.CurrentFunds);
    console.log(input.NeededFunds);
    props.add({ ...input, id: Math.random() });
    setInput({
        schoolName: " ",
        schoolLocation: " ",
        CurrentFunds: " ",
        NeededFunds: " ",
        schoolID: null,
    });
  };
  console.log("props", props);
  console.log("input", input);
  return (
    <div className="school-page-form">
         <form onSubmit={handleSubmit}>
           <h4>Add School</h4>
        <label htmlFor="schoolName">
          School: {" "}
          <input
            type="text"
            name="schoolName"
            value={input.schoolName}
            onChange={handleChange}
            />
          </label>
          <label htmlFor="schoolLocation">
          Location: {" "}
          <input
            type="text"
            name="schoolLocation"
            value={input.schoolLocation}
            onChange={handleChange}
            />
          </label>
          <label htmlFor="CurrentFunds">
          Current Funds: ${" "}
          <input
            type="text"
            name="CurrentFunds"
            value={input.CurrentFunds}
            onChange={handleChange}
            />
          </label>
          <label htmlFor="NeededFunds">
          Needed Funds: ${" "}
          <input
            type="text"
            name="NeededFunds"
            value={input.NeededFunds}
            onChange={handleChange}
            />
          </label>
          <button>Submit!</button>
        </form>
      </div>
    );
  }

  export default SchoolForm; 