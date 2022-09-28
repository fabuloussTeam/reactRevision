import React, { Component } from 'react';

class Regularcomponent extends Component {

    render() { 
        console.log('***************************regular compoent render **********************');

        return (
            <div>
                Regular component: {this.props.name}
            </div>
        );
    }
}
 
export default Regularcomponent;