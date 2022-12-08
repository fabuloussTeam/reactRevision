import React, {useContext} from 'react';
import { CounterContext } from '../App';

// Ici On importer le context creer a la page App pour l'utiliser avec useContext()
function UseReducerWithContextA() {
   
const countContext = useContext(CounterContext)

        return (
            <div>
             <button onClick={()=>countContext.counterDispatch('decrement')}>Decrement</button>
             <button onClick={()=>countContext.counterDispatch('reset')}>Reset</button>
             <button onClick={()=>countContext.counterDispatch('increment')}>Increment</button>
         </div>
        )
         
}
 
export default UseReducerWithContextA;
