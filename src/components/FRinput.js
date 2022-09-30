import React from 'react';
import Input from './Input';

const FRinput = React.forwardRef((props, ref) => {
    return ( 
        <input type='text' ref={ref} />
     )
})
 
export default FRinput;