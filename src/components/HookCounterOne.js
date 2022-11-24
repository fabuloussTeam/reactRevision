import React, { useState, useEffect } from 'react';

function HookCounterOne() {

    // Conditionnement de rechargement  dun useState en fonction de sont state initial
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // Le deuxieme parametre est un tableau.
    // Il permet de conditionner le rechargement de useEffect si le state count change.
    useEffect(() => {
        console.log("update document title");
        document.title = `Clicked ${count} times`
    }, [count] )

    return ( 
        <div>
            <input
              type='text'
              value={name} 
              onChange={(e)=>setName(e.target.value)}
             />
            <button onClick={()=>setCount(count + 1)}>click {count} times</button>
        </div>
     );
}

export default HookCounterOne;