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
        const numInput = {
            display: 'block',
            padding: '0 1.8rem',
            margin: '.6rem 0',

        }

        const btnStyle = {
           color: '#fff',
            backgroundColor: '#000',
            padding: '.5rem 2rem',
            margin: '.6rem 0',
            borderRadius: 0,
        }

        const formStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#FFAC00',
            width: '20rem',
            margin: '0 auto',
            padding: '2rem 1rem',
            borderRadius: '.8rem',
            boxShadow: '0px 5px 8px -1px rgba(0,0,0,0.51)',
        }
        return (
            <form onSubmit={this.handleSubmit} style={formStyle}>
                <Modal />
                <label htmlFor="numOne" style={numInput}>
                    <div>
                        First Number
                </div>
                    <input type="number" value={this.state.numOne} onChange={this.handleChange} id="numOne" name="numOne" />
                </label>
                <label htmlFor="numTwo" style={numInput}>
                    <div>
                        Second Number {Number(this.state.numOne) + Number(this.state.numTwo)}
                    </div>
                    <input type="number" value={this.state.numTwo} onChange={this.handleChange} id="numTwo" name="numTwo" />
                </label>
                <button onClick={this.addNum}  class="btn" type="button" style={btnStyle}>Click to add</button>
            </form>
        )
    }
}


export default Form;