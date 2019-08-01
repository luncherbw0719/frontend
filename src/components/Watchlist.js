import React, { useState, useEffect } from "react";
import './App.css';	import SchoolCard from "./SchoolCard";
import SchoolCards from '/.SchoolBrowse.js'	
import axios from "axios";
export default function selectFromWatchList() {	

export default function SchoolBrowse() {
const [schools, setSchools] = useState( [] );	  const [schools, setSchools] = useState([

     {
useEffect(() => {axios.get("https://schooldonations-luncher.herokuapp.com/schools/schools")	      
  

   return (
      {schools.map(school => 