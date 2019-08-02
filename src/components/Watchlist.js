import React, { useState, useEffect } from "react";
import "./App.css";
import SchoolCard from "./SchoolCard";
import axios from "axios";

function SelectFromWatchList() {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    axios.get("https://schooldonations-luncher.herokuapp.com/schools/schools");
  });

  return (
    <div className="Watchlist">
      {schools.map(schools => {
        return <SchoolCard />;
      })}
    </div>
  );
}
export default SelectFromWatchList;
