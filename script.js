class AdvancedCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            tap: 0
        }
    }

    handleCountAndTap(action) {
        this.setState({ tap: this.state.tap + 1 })
        if (action === 'inc') this.setState({ count: this.state.count + 1 })
        if (action === 'dec') {
            if ( this.state.count === 0 ) return
            this.setState({ count: this.state.count - 1 })
        
        }
    }

    resetCount() {
        this.setState({ count: 0 })
    }

    resetAll() {
        this.setState({ count: 0 })
        this.setState({ tap: 0 })
    }

    render() {
        return (
            <div className="app">
                <div className="counter">
                    <h1>Counter</h1>
                    <h2 className="count">{this.state.count}</h2>
                    <h4 className="taps">Total taps: {this.state.tap}</h4>
                    <div><button onClick={() => this.handleCountAndTap('dec')}>Decrement -</button><button onClick={() => this.handleCountAndTap('inc')}>Increment +</button></div>
                    <div><button className="reset-count" onClick={() => this.resetCount()}>Reset Count</button><button className="reset-all" onClick={() => this.resetAll()}>Reset All</button></div>
                </div>
            </div>
        )
    }
};

ReactDOM.render(
    <AdvancedCounter />,
    document.getElementById('root')
);