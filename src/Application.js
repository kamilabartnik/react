import React, {Component} from 'react';
import HighScore from './HighScore';
import './css/style.css';


class Application extends Component {
    constructor(props){
        super(props);

        this.state = {
            number1: null,
            number2: null,
            result: 0,
            sign: null,
        }
    }

    handleClick = (props) => {
        if(this.state.sign == null){
            let num;
            num = this.state.number1*10 + props;
            this.setState({number1: num});
        } else {
            let num;
            num = this.state.number2*10 + props;
            this.setState({number2: num});
        }
    }

    handleSign = (props) => {
        this.setState({sign: '+'})
    }

    result = (props) => {
        let num;
        num = this.state.number1 + this.state.number2;
        console.log(this.number1);
        this.setState({result: num})
    }

    cancel = (props) => {
        this.setState({
            number1: null,
            number2: null,
            result: 0,
            sign: null,})
    };

    // componentDidUpdate(props, state){
    //     if(this.state.count > 3 && this.state.count !== state.count && !this.state.overTen)
    //     this.setState({overTen: true})
    // }

    // resetCout = (e) => {
    //     this.setState({
    //         count:0,
    //         overTen: false,
    //     });
    // }

    render(){
        let {result} = this.state;
        let {number1} = this.state;
        let {number2} = this.state;
        let {sign} = this.state;

        return (
            <div>
                <h1> Calculator</h1>
                <h2>`{number1}{sign}{number2}</h2>
                <HighScore 
                    overTen={this.state.overTen}
                    onReset={this.resetCout}
                />
                <span>
                    <div>
                        <button onClick={() => this.handleClick(1)}>1</button>
                        <button onClick={() => this.handleClick(2)}>2</button>
                        <button onClick={() => this.handleClick(3)}>3</button>
                    </div>
                    <div>
                        <button onClick={() => this.handleClick(4)}>4</button>
                        <button onClick={() => this.handleClick(5)}>5</button>
                        <button onClick={() => this.handleClick(6)}>6</button>
                    </div>
                    <div>
                        <button onClick={() => this.handleClick(7)}>7</button>
                        <button onClick={() => this.handleClick(8)}>8</button>
                        <button onClick={() => this.handleClick(9)}>9</button>
                    </div>

                    <div>
                        <button onClick={() => this.handleClick(0)}>0</button>
                        <button onClick={() => this.handleSign()}>+</button>
                        <button onClick={() => this.result()}>=</button>
                    </div>
                    <div>
                        <button onClick={() => this.cancel()}>Cancel</button>
                   </div>
                </span>

                <h1> Result: {result} </h1>
            </div>

        );
    }
}

export default Application;