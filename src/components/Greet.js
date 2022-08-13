import React from 'react';

export function Greet(props) {

   const  {name, surname, gender} = props;
   // console.log(props);
    return ( 
        <div>
            <h2>First: {name}</h2>
            <h2>Surname {surname}</h2>
            <h2>Gender: {gender}</h2>
            <hr/>
        </div>
     );
} 

//export const Greet = () => <h3>Nous sommes hello world</h3>
export const Greeting = () => <h3>I thnak God for my life </h3>

//export default Greet;