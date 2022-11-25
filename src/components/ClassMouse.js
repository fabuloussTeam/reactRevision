import React, { Component } from 'react';

class ClassMouse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            x: 0,
            y: 0
        }
    }

     logMousePosition = (e) => {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
     }

    componentDidMount(){
        console.log('ClassMouse move');
        window.addEventListener('mousemove', this.logMousePosition)
    }

    render() { 
      //  const [x, y] = this.state
        return ( 
           <div>Hook X - {this.state.x}  Y - {this.state.y}</div>
         );
    }
}
 
export default ClassMouse;