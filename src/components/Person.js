import React from 'react';

const Person = ({ nid, person}) => {

    //const {name, age, status} = props;

    return ( 
        <ul>
            {nid}
         <li>Name: {person.name} </li>
         <li>Age: {person.age}</li>
          <li>Status: {person.status}</li>
    </ul>
     );
}
 
export default Person;