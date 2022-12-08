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


function UseReducerHookThree() {

    // Il est preferable d'utiliser plusieurs useReducer pour exploiter une meme function
  const  [count, dispatchWithouAction] = useReducer(reducerFunction, initialState)
  const  [countTwo, dispatchWithouActionTwo] = useReducer(reducerFunction, initialState)

    return ( 
        <div>
            <div>
           <h3> count - {count} </h3>
            <button onClick={()=>dispatchWithouAction('decrement')}>Decrement</button>
            <button onClick={()=>dispatchWithouAction('reset')}>Reset</button>
            <button onClick={()=>dispatchWithouAction('increment')}>Increment</button>
        </div><br/>
        <div>
            <button onClick={()=>dispatchWithouActionTwo('decrement')}>Decrement</button>
            <button onClick={()=>dispatchWithouActionTwo('reset')}>Reset</button>
            <button onClick={()=>dispatchWithouActionTwo('increment')}>Increment</button>
            <h3> count two - {countTwo} </h3>
        </div>
        </div>
     );
}

export default UseReducerHookThree;
