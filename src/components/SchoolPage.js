import React, { useState } from "react";

function SchoolPage(props) {
  const {
    schoolName,
    schoolLocation,
    CurrentFunds,
    NeededFunds,
    schoolID
  } = props.school;
  // same useState from form.js
  const [input, setInput] = useState({
    schoolName: schoolName,
    schoolLocation: schoolLocation,
    CurrentFunds: CurrentFunds,
    NeededFunds: NeededFunds,
    schoolID: schoolID
  });
  // create new useState for editing data
  const [editing, setEditing] = useState(false);

  const handleEdit = event => {
    setEditing(!editing);
  };
  // same as SchoolForm.js (handleChange is form input)
  const handleChange = event => {
    console.log(event.target.name);
    console.log(event.target.value);
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  // instead of hanldeSubmit in form.js we have new const, handleUpdate (passes inputed data as props to update/edit)
  const handleUpdate = event => {
    event.preventDefault();
    props.update(input);
    setEditing(false);
  };

  // Edit shows as boolean - T/F (apply to if/else below)
  console.log("edit", editing);

  if (editing === false) {
    return (
      // editing existing schools
      <div>
        <div>School: {schoolName}</div>
        <div>Location: {schoolLocation}</div>
        <div>Current Funds: {CurrentFunds}</div>
        <div>Needed Funds: {NeededFunds}</div>
        <button onClick={handleEdit}>Edit</button>
      </div>
    );
  } else {
    return (
      // adding new schools - copy/paste from form.js (just for <form onSumbit > use handleUpdate from above instead of handleSubmit)
      <div className="school-page-form">
        <form onSubmit={handleUpdate}>
          <label htmlFor="schoolName">
            School:{" "}
            <input
              type="text"
              name="schoolName"
              value={input.schoolName}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="schoolLocation">
            Location:{" "}
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
          <button>Submit</button>
        </form>
      </div>
      // end of copy/paste from SchoolForm.js
    );
  }
}

export default SchoolPage;
