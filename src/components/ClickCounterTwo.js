import React, { Component } from 'react';

class ClickCounterTwo extends Component {
    
    render() { 
        return ( 
            <button onClick={this.props.clickCounterTwo}>I Clicked {this.props.count} time</button>
         );
    }
}
 
export default ClickCounterTwo;