import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();

        this.state = {
            message: "Welcome visitor"
        }
    }

    subscribeItem(){
        this.setState({
            message: "Thank you for subcribe",
        });
    }

    render() { 
        return ( 
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={() => this.subscribeItem()}>SUBSCRIBE</button>
            </div>
         );
    }
}
 
export default Message;