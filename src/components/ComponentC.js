import React  from 'react';
import ComponentE from './ComponentE';

class ComponentC extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <ComponentE />
         );
    }
}
 
export default ComponentC;