import React, { Component } from 'react'
import Modal from './Modal';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            numOne: '',
            numTwo: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addNum = this.addNum.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const value = event.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        console.log(`${name} element was clicked and this is the value ${value}`)
    }

    handleSubmit(event) {
        alert(`Welcome ${this.state.userName}`)
        event.preventDefault();
    }


    addNum(event) {
        event.preventDefault();
        alert(`${this.state.numOne} + ${this.state.numTwo} equals ${Number(this.state.numOne) + Number(this.state.numTwo)}`)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Modal />
                <label htmlFor="numOne">
                    <div>
                        First Number
                </div>
                    <input type="number" value={this.state.numOne} onChange={this.handleChange} id="numOne" name="numOne" />
                </label>
                <label htmlFor="numTwo">
                    <div>
                        Second Number {Number(this.state.numOne) + Number(this.state.numTwo)}
                    </div>
                    <input type="number" value={this.state.numTwo} onChange={this.handleChange} id="numTwo" name="numTwo" />
                </label>
                <button onClick={this.addNum} type="submit">Click to add</button>
            </form>
        )
    }
}


export default Form;