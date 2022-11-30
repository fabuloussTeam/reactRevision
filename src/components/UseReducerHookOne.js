import React, {useReducer} from 'react';

// Valeur initial
const initialState = 0;

// Function reducer
const reducerFunction = (state, action) => {
  switch (action) {
    case 'increment':
        return state + 1;
    case 'decrement':
        return state - 1
    case 'reset':
        return initialState    
    default:
        return state
  }
}


function UseReducerHookOne() {

    // Dispatch permet d'esxecuter le code de la fonction reducerFunction
    // useReduce retourne le current state/initial state qui est le resultat 
    //de l'execution de la fonction reducerFunction representer par 'count'
  const  [count, dispatchWithouAction] = useReducer(reducerFunction, initialState)

    return ( 
        <div>
           <h3> count - {count} </h3>
            <button onClick={()=>dispatchWithouAction('decrement')}>Decrement</button>
            <button onClick={()=>dispatchWithouAction('reset')}>Reset</button>
            <button onClick={()=>dispatchWithouAction('increment')}>Increment</button>
        </div>
     );
}

export default UseReducerHookOne;