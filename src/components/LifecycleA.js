import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {
    //Premier a etre executer: utiliser pour initialiser les etats  et binder les fonctions
    constructor(props) {
        super(props);
        this.state = {
            name: "Emmanuel tjom"
        }

        console.log("LifcycleA constructor");
    }

    // deuxieme a etre executer: mettre a jour un etat a partir d'un props
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }

    // Quatrieme fonction a etre executer: Charger les requettes HTTP asynchrone
    componentDidMount(){
        console.log('LifecycleA ComponentDidMount');
    }

    // Troisieme a etre executer: charger les elements du DOM
    render() { 
        console.log('LifecycleA render');
        return ( 
            <div> 
                 <div>LifeCycle A</div>
                <LifecycleB/>
            </div>
         );
    }
}
 
export default LifecycleA;