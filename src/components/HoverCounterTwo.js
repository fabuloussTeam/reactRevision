import React, { Component } from 'react';

class HoverCounterTwo extends Component {
   
    render() { 
        return ( 
            <h2 onMouseOver={this.props.hoverCounterTwo}>On hover on {this.props.count} time</h2>
         );
    }
}
 
export default HoverCounterTwo;