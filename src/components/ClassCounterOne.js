import React from 'react';

class ClassCounterOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: ""
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    // Conditionnement lors du rechargement du hook componentDidUpdate
    // en fonction du state actuel au precedent(prevState)
    componentDidUpdate(prevProps, PrevState) {
        console.log(PrevState.count);
        console.log(this.state.count);
        if(PrevState.count != this.state.count){
            console.log("clicked X times");
            document.title = `Clicked ${this.state.count} times`
        }    
    }

    render() { 
        return ( 
            <div>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e)=> {
                        this.setState({ name: e.target.value })
                    } }
                 />
                <button onClick={()=>this.setState({ count: this.state.count + 1 })}>ClickHereXTimes</button>
              {/*  Click {this.state.count} times*/}
            </div>
         );
    }
}
 
export default ClassCounterOne;