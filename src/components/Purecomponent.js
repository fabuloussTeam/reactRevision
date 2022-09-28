import React, { PureComponent } from 'react';

class Purecomponent extends PureComponent {
    
    render() { 
        console.log('******************purent compoent render*********************');

        return (
            <div>
                Pure Component: {this.props.name}.
            </div>
        );
    }
}
 
export default Purecomponent;