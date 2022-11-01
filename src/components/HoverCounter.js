import React, { Component } from 'react';
import UpdateComponent from './WithCounter';

class HoverCounter extends Component {
  
 

    render() { 
       // const { count } = this.state
        return ( 
            <h1 onMouseOver={this.props.incrementCount}>Je suis ici {this.props.count}</h1>
         );
    }
}
 
export default UpdateComponent(HoverCounter);