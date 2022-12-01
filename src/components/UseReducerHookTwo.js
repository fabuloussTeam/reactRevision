import React, { useReducer } from 'react';

// Valeur initial
const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

// Function reducer. il est a note que 
// le state c'est l'objet initialState{}
const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'increment':
        return {...state, firstCounter: state.firstCounter + action.value}
    case 'increment2':
        return {...state, secondCounter: state.secondCounter + action.value}
    case 'decrement2':
        return {...state, secondCounter: state.secondCounter - action.value}    
    case 'decrement':
        return {...state, firstCounter: state.firstCounter - action.value}
    case 'reset':
        return initialState   
    default:
        return state
  }
}


function UseReducerHookTwo() {

    // Dispatch permet d'esxecuter le code de la fonction reducerFunction
    // useReduce retourne le current state/initial state qui est le resultat 
    //de l'execution de la fonction reducerFunction afficher par 'count'
    // dispatchWithouAction permet d'envoyer une action a notre function reducer(reducerFunction)
  const  [count, dispatchWithouAction] = useReducer(reducerFunction, initialState)

    return ( 
        <div>
           <h3> count first Counter - {count.firstCounter} </h3>
            <button onClick={()=>dispatchWithouAction({type: 'decrement', value: 1})}>
                Decrement 1
            </button>
            <button onClick={()=>dispatchWithouAction({type: 'decrement2', value: 1})}>
                Decrement 2
            </button>
            <button onClick={()=>dispatchWithouAction({type: 'decrement', value: 5})}>
                Decrement 5
            </button>
            <button onClick={()=>dispatchWithouAction({type: 'reset',})}>
                Reset
            </button>
            <button onClick={()=>dispatchWithouAction({type:'increment', value: 1})}>
                Increment 1
            </button>
            <button onClick={()=>dispatchWithouAction({type:'increment2', value: 1})}>
                Increment 2
            </button>
            <button onClick={()=>dispatchWithouAction({type:'increment', value: 5})}>
                Increment 5
            </button>
            <h3> count second Counter - {count.secondCounter} </h3>
        </div>
     );
}

export default UseReducerHookTwo;