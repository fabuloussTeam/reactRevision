import React, { useContext } from 'react';
import ContextHookC from './ContextHookC';
import { fullNameContext, idNumberContext } from './UserContextHook';


function ContextHookB() {

 const fullName = useContext(fullNameContext)
 const idNumber = useContext(idNumberContext)

    return ( 
           <div>
             <span>{fullName} -  {idNumber}</span>
           </div> 
     );
}

export default ContextHookB;


   

