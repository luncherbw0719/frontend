import React from "react";
 
// Contains a list of schools who have requested financial needs for their students.
// Each school is laid out in a grid format, with the name of the school, physical address/location of the school and a requested amount of funds that the school needs in order to provide lunches for their students
function SchoolCard({ school, address, location, funding }) {
 return (
   <div className="school-card">
     <h3 className="School">School: </h3>
     <h3 className="Address">Address: </h3>
     <h3 className="Location">Location: </h3>
     <h3 className="Funding">Lunch Funding Needed: </h3>
   </div>
 );
}
 
export default SchoolCard;