import React from 'react';

const ChildComponent = (props) => {
    return ( 
      /*  <button onClick={props.messageChildDisplay}>click Me</button>*/
        <button onClick={()=> props.messageChildDisplay(' boss')}>click Me</button>
      
     );
}
 
export default ChildComponent;