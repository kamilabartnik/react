import React, {Component} from 'react';
import './css/style.css';
import Button from './components/Button.js'


class Application extends Component {
    constructor(props){
        super(props);

        this.state={
            current: '0',
            previous: [],
        }
    }

    reset = () => {
        this.setState({result: '0'});
    }

    render(){
        const buttons  = [
            {symbol: 'C', cols: 1, action: this.reset}
        ];

        return (
            <div>
                <input className="result" type="text" value={this.state.current} />

                <Button></Button>
            
            </div>
        );
    }
}

export default Application;