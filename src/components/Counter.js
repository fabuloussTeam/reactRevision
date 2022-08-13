import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            counter: 0,
        }
    }

    incrementNumber(){
     /*  this.setState({
           counter: this.state.counter + 1
       }, ()=>console.log(this.state.counter))*/
       
       this.setState(
           (prevState, props) => ({counter: prevState.counter + 1}),
           ()=>console.log(this.state.counter)
        )

    }

    multiIncrement(){
        this.incrementNumber();
        this.incrementNumber();
        this.incrementNumber();
        this.incrementNumber();
        this.incrementNumber();
        this.incrementNumber();
        this.incrementNumber();
        this.incrementNumber();
        this.incrementNumber();
        this.incrementNumber();
        this.incrementNumber();

    }

   
    render() { 
        return ( 
            <div>
                <h2>Current number is - {this.state.counter} </h2>
                <button onClick={()=>this.multiIncrement()}>Inscrement</button>
            </div>
         );
    }
}
 
export default Counter;