import React from 'react';

class ClassCounterOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        document.title = `Clicked ${this.state.count} times`
    }

    render() { 
        return ( 
            <div>
                <button onClick={()=>this.setState({ count: this.state.count + 1 })}>ClickHereXTimes</button>
                Click {this.state.count} times
            </div>
         );
    }
}
 
export default ClassCounterOne;