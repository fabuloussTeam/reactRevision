import React, { Component } from 'react';

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // Execute this.tick chaue seconde
    componentDidMount(){
        console.log('composant mounted');
        this.interval = setInterval(this.tick, 1000)
    }

    // on demonte le composant pour ne pas
    // avoir les fuites de memoire
    componentWillUnmount(){
        console.log('composant demonter');
        clearInterval(this.interval)
    }

    


    render() { 
        return ( 
            <div>
                {this.state.count}
            </div>
         );
    }
}
 
export default IntervalClassCounter;