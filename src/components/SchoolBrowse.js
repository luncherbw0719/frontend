import React from 'react';
import './App.css';
import SchoolCard from '/.schoolCard.js'

export default function schoolBrowseList() {

const [schools, setSchools] = useState( [] );

useEffect(() => {axios.get("https://schooldonations-luncher.herokuapp.com/schools/schools")


    .then (res => {setSchools(res.data.results);
    })
  
    .catch( err => console.log("Error Msg", err))
  
}, [])

  return 
  <section>
    <header>
    <h1>Browse Schools</h1>
    </header>
   

    <div class="schoolcards">3
      
      {schools.map(school => (<SchoolCard {...school.props}
      />)
      )}
              
            
      </div>
      </section>
}
    



