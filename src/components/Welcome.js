import React, { Component, createElement } from 'react';

class Welcome extends Component {
    state = {  } 
    render() { 
        return(
            <h3>
              {this.props.children }{this.props.name}
            </h3>
        );
    }
}
 
export default Welcome;