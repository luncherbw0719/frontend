import React, { useEffect } from "react";
import SchoolCard from "./SchoolCard";

import { getSchools } from '../actions';

import { connect } from 'react-redux';

export default connect(state => ({...state}), { getSchools })(function SchoolBrowse(props) {

  useEffect(() => {props.getSchools()}, []);

  return (
    <section>
      <header>
        <h1>Browse Schools</h1>
      </header>

      <div className="schoolcards">
        {
          props.gettingSchools ? <div className='loading'>Getting schools...</div> :
          props.getSchoolsError ? <div className='error'>{props.getSchoolsError}</div> : (
            props.schools.length > 0 ? (
              props.schools.map(school => (
                <SchoolCard key={school.id} {...school} />
              ))
            ) : <span>No schools found</span>
          )
        }
      </div>
    </section>
  );
})