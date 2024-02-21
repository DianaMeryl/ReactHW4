import React, { Component } from 'react';
import Button from '../Button/Button';




export default  class ShowHideAlert extends Component {
    constructor(props) {
        super(props);
        this.state = {
        isVisible: false,
        };
    }
    handleClick = () => {
        this.setState((prevState) => ({ isVisible: !prevState.isVisible }));
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.isVisible !== this.state.isVisible) {
            if (this.state.isVisible) {
                alert('Компонент відкрити');
            } else {
                alert('Компонент закрити');
            }
        }
    }

    render() {
        const { isVisible } = this.state;
        return (
        <div>
            <Button onClick={this.handleClick}>Show / Hide</Button>
            {isVisible && <div className="component">Компонент</div>}
        </div>
        );
    }
}
