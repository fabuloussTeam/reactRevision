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

 
    // const OnePerson = usersEmployees.map(person => <Person key={person.id} person={person}/>)
  //On ne map pas le tableau dans le render

    const OnePerson = usersEmployees.map((person, index) => <Person key={index} nid={index} person={person}/>)
     // Lorsque il ya pas de cle unique a choisir, on ajoute un deuxieme 
     //paramettre a map:index que on utilise comme cle. Il n'est pas conseiller de l'utiliser 
     // a cause de trois pb: filtrage, clee unique dans le tableau en questtion

    return ( 
           <div>
            <h1>List of person here</h1>
            {OnePerson}
        </div>
     );
}
 
export default NameList;