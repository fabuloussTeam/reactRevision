import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: "Welcome visitor",
        }
        this.subscribeItem = this.subscribeItem.bind(this);
    }

    subscribeItem(){
        this.setState({
            message: "Thank you for subcribe",
        }); 
    }

    debugLog(){
        console.log('debug log here');
    }
      
    render() { 
        return ( 
            <div>
                <h2>{this.state.message}</h2>
               {/* <button onClick={this.subscribeItem.bind(this)}>SUBSCRIBE</button>*/}
               {/* <button onClick={() => this.subscribeItem()}>SUBSCRIBE2</button>*/}
                <button onClick={this.subscribeItem}>SUBSCRIBE3</button>
            </div>
         );
    }
}
 
export default Message;