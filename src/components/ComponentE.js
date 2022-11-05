import React, { Component } from 'react';
import ComponentF from './ComponentF';

class ComponentE extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <ComponentF />
         );
    }
}
 
export default ComponentE;