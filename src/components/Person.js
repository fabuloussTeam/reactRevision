import React from 'react';

const Person = ({person}) => {

    //const {name, age, status} = props;

    return ( 
        <ul>
         <li>Name: {person.name} </li>
         <li>Age: {person.age}</li>
          <li>Status: {person.status}</li>
    </ul>
     );
}
 
export default Person;