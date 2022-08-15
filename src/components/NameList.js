import React from 'react';
import Person from './Person';

const NameList = () => {


    const usersEmployees = [
        {
            id: 1,
            name: 'Fredericka',
            age: 28,
            status: 'maried'
        },
        {
            id: 2,
            name: 'Lorenzo lopez',
            age: 26,
            status: 'single'
        },
        {
            id: 3,
            name: 'Emmanuel',
            age: 28,
            status: 'single'
        }


    ];

 
    const OnePerson = usersEmployees.map(person => <Person key={person.id} person={person}/>)
  //On ne map pas le tableau dans le render

    return ( 
           <div>
            <h1>List of person here</h1>
            {OnePerson}
        </div>
     );
}
 
export default NameList;