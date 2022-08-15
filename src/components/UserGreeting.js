import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor() {
        super();

        this.state = {
            isLoggin: true
        }
    }
    render() { 

       /* if(this.state.isLoggin == true){
            return(
                <div>
                <h1>Welcome Emmanuel</h1>
                </div>
            )
        } else {
         return ( 
            <div>
                <h1>Welcome Guest</h1>
            </div>
         );
        }*/

       /* return(
            this.state.isLoggin ?
            <h1>Welcome Emmanuel</h1> :
            <h1>Welcome Guest</h1>
        )*/

       // return this.state.isLoggin && <h1>Welcome Emmanuel</h1> 
        // si la condition de gauche est vrai elle affiche le message de droite

        let message = '';
        if(this.state.isLoggin == true){
            message = React.createElement('h1', null, 'Welcome Emmanuel');
        } else {
            message = React.createElement('h1', null, 'Welcome Guest');

        }

        return(
            <div>{message}</div>
        )
       
    }
}
 
export default UserGreeting;