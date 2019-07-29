import React from 'react';
import './App.css';
import schoolCard from '/.schoolCard.js'

export default function schoolBrowseList() {

const [schools, setSchools] = useState( [] );

useEffect(() => {axios.get()


    .then (res => {setSchools(res.data.results);
    })
  
    .catch( err => console.log("Error Msg", err))
  
}, [])

  return 
  <section>
    <header>
    <h1>Browse Schools</h1>
    </header>
   

    <div class="schoolcards">
      
      {schools.map(school => (<schoolCard {...school.props}
      />)
      )}
              
            
      </div>
      </section>
}
    



