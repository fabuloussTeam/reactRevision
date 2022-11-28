import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

// Ici demonter le interval et empecher le rerendring ([]) a la fois 
// empeche le comptage. pour cela on conditione le rerendring avec [count]: qui signifie 
//rerendring ssi prevCount est different

    useEffect(() => {
        console.log('hook interval mounted');
        const interval = setInterval(tick, 1000)
        return() => {
            clearInterval(interval)
        }
    }, [count] )

    const tick = () =>{
       //option01: setCount(count + 1)
        setCount(prevCount => prevCount + 1)
    }


    return ( 
        <div>
            {count}
        </div>
     );
}

export default IntervalHookCounter;