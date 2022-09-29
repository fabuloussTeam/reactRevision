import React, { Component } from 'react';
import Input from './Input';


class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.componentRef = React.createRef()
    }


    focusInputhandler = () =>  {
        this.componentRef.current.FocusInput();
    }

    render() { 
        return ( 
            <div>
               <input ref={this.componentRef} />
               <button onClick={this.focusInputhandler}>Click</button>
            </div>
         );
    }
}
 
export default FocusInput;