import React from 'react';

function FunctionClick(){
    
    function ClickMe(){
        console.log('hello web dev');
   }
    
    return ( 
        <div>
            <button onClick={ClickMe}>click here</button>
          
        </div>
     );
}
 
export default FunctionClick;