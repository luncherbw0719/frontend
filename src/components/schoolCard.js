import React from 'react';
import { Card } from 'semantic-ui-react';

 export default function schoolCard (props) {
    return (
      
        <Card
        header={props.name}
        image={props.img}
        description={props.info} />
          );
        }