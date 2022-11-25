import React, { useState, useEffect } from 'react';

function HookMouse() {

    // L'objectif  ici est d'empecher le rechargement de useEffect
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        setX(e.clientX)
        setY(e.clientY)
    }

 // Le tableau vide en deuxieme parametre permet d'empecher le rerendring de useEffect
 // qui joue le role de componentDidUpdate egalement.
    useEffect(() => {
        console.log('useEffet called');
        window.addEventListener('mousemove', logMousePosition)
    }, [] )

    return ( 
        <div>
            Hook X - {x}  Y - {y}
        </div>
     );
}

export default HookMouse;