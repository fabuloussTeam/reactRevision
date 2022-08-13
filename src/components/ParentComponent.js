import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messageAlert: 'Welcome in our page'
        }
        this.messageParentDisplay = this.messageParentDisplay.bind(this)
    }

      messageParentDisplay(){
         alert(`EMMANUEL ${this.state.messageAlert}`);
      }

    render() { 
        return ( 
            <div>
               <ChildComponent messageChildDisplay = {this.messageParentDisplay} /> 
            </div>
         );
    }
}
 
export default ParentComponent;