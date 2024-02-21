import React, { Component } from 'react';
import Button from '../Button/Button';

export default  class UpdateNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
        alert(`${this.state.count}`);
    }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count <= 3) {
            return true; 
        }
        alert('Число більше 3, за умовою задачі далі не збільшуємо :)');
        return false; 
    }
    handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
    render() {
        return (
        <div>
        <Button onClick={this.handleIncrement}>Збільшити число</Button>
        <p className="component">Number: {this.state.count}</p>
        </div>
    );
    }
}

