import React, { Component } from 'react';
import UpdateComponent from './WithCounter';

class ClickCounter extends Component {
 
  

    render() { 

       // console.log(this.props.name);
        return ( 
            <button onClick={this.props.incrementCount}> {this.props.name} I Clicked {this.props.count}</button>
         );
    }
}
 
export default UpdateComponent(ClickCounter);