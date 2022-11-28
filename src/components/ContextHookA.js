import React, { Component } from 'react';
import ContextHookB from './ContextHookB';

class ContextHookA extends Component {
    state = {  } 
    render() { 
        return (
            <ContextHookB />
        );
    }
}
 
export default ContextHookA;