import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

// mounting: constructor(props), static getDerivedStateFromProps(prop, state), render, componentDidMount.
// Updating:  static getDerivedStateFromProps(Prop, state), shouldComponentUpdate(), getSnapshotBeforeUpdate(prevProps, prevState), componentDidUpdate(prevProps, prevState, snapshot)
// Unmounting: componentWillUnmount()
// Error handling: static getDerivedStateFromError(error), componentDidCatch(error, info)

    // Mounting: Premier a etre executer: utiliser pour initialiser les etats  et binder les fonctions
    
    constructor(props) {
        super(props);
        this.state = {
            name: "Emmanuel tjom"
        }

        console.log("LifecycleA constructor");
        this.changestate = this.changestate.bind(this);
    }

    // Mounting: deuxieme a etre executer: mettre a jour un etat a partir d'un props
    // Updating: Premiere fonction executer
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }

    // Mounting: Quatrieme fonction a etre executer: Charger les requettes HTTP asynchrone
    componentDidMount(){
        console.log('LifecycleA ComponentDidMount');
    }

    // Updating: Deuxieme fonction executer
    shouldComponentUpdate(){ 
        console.log('LifecycleA shouldComponenetUpdate');
        return true;
    }
    // Updating: troisieme fonctions
    getSnaphotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeupdate');
        return null;
    }
     
    //Updating: Quatrieme fonction executer
    componentDidUpdate(){
        console.log('LifecycleA componentDidupdate ');
    }

    changestate(){
        this.setState(
            { name: 'code Emmanuel' }
        )
        console.log(`yourname are ${this.state.name}`);
    }

     // Mounting: Troisieme a etre executer: charger les elements du DOM
    render() { 
        console.log('LifecycleA render');
        return ( 
            <div> 
                 <div>LifeCycle A</div>
                 <button onClick={this.changestate}>Update</button>

                 <LifecycleB/>
            </div>
         ); 
        }
}
 
export default LifecycleA;