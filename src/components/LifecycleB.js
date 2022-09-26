import React, { Component } from 'react';

class LifecycleB extends Component {
    //Premier a etre executer: utiliser pour initialiser les etats  et binder les fonctions
    constructor(props) {
        super(props);
        this.state = {
            name: "Emmanuel tjom"
        }

        console.log("LifecycleB constructor");
    }

    // deuxieme a etre executer: mettre a jour un etat a partir d'un props
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }

    // Quatrieme fonction a etre executer: Charger les requettes HTTP asynchrone
    componentDidMount(){
        console.log('LifecycleB ComponentDidMount');
    }

    // Troisieme a etre executer: charger les elements du DOM
    render() { 
        console.log('LifecycleB render');
        return ( 

            <div> LifeCycle B</div>
         );
    }
}
 
export default LifecycleB;