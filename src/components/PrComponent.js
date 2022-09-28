import React, { Component } from 'react';
import MemoComp from './MemoComp';
import Purecomponent from './Purecomponent';
import Regularcomponent from './Regularcomponent';

class PrComponent extends Component {

// Purecomponent implement shouldComponentUpdate lifecycle avec une comparaison superficiel des props et state avant de s'afficher
// Pour un rendu precis, il faut se rassurer que tout les composant enfants sont des pure component 

    constructor(props) {
        super(props);
        this.state = {
            name: 'Emmanuel'
        }
    }

    componentDidMount(){
        setInterval( () => {
            this.setState(
                {name: 'Emmanuel'}
            )
        }, 2000 )
    }

    render() { 

        //console.log('**************************parent compoent render*****************************');

        return ( 
            <div>
                Parent Component 
              { /* <Regularcomponent name={this.state.name} />*/}
              { /* <Purecomponent name={this.state.name}  /> */}

              <MemoComp name={this.state.name} />
            </div>
         );
    }
}
 
export default PrComponent;