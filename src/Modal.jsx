import React, { Component } from 'react';
import './Modal.css';

export class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const value = event.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({ [name]: value });
        console.log(`${name} element was clicked and this is the value ${value}`)
    }

    render() {
        const btnStyle = {
            color: '#fff',
            backgroundColor: '#000',
            padding: '.5rem 2rem',
            margin: '.5rem 0 2.4rem 0',
            borderRadius: 0,
            fontWeight: 'inherit',
        }
        const nameInput = {
            padding: '.4rem 1.6rem',
            border: '1px solid #000',
            fontWeight: 'inherit',
            width: '100%'
        }

        const h2 = {
            fontWeight: 800,
            fontSize: '2rem',
            textTransform: 'uppercase',
            color: '#FFAC00',
        }

        const h3 = {
            fontWeight: 800,
            fontSize: '1.5rem',
            textTransform: 'uppercase',
            color: '#000',
        }
        const marginLeft = {
            marginLeft: '.5rem',
        }

        const modalBtn = {
            color: '#fff',
            backgroundColor: '#DE2949',
            padding: '.5rem 2rem',
            margin: '2rem 0 1rem 0',
            borderRadius: 0,
            fontWeight: 'inherit', 
        }

        const Modal = {
            display: 'flex',
            flexDirection: 'column',
            width: '22rem',
        }

        const spinner = {
            display: 'flex',
            margin: '1rem 0'
        }
        return (
            <div style={Modal}>
                <h2 style={h2}>
                    Hello Howdy <span role="img" aria-label="emoji">🐱‍👤</span>
                </h2>
                 <h2 style={h3}>
                   Let's Calculate some shit!
                </h2>
                <div style={spinner}>
                <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-danger" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-grow text-light" role="status">
                    <span className="sr-only">Loading...</span>
                    </div>
                    </div>
                <div>
                    <label style={{width: '100%'}} htmlFor="userName">
                        <input style={nameInput} autoFocus type="text" value={this.state.userName} onChange={this.handleChange} id="userName" name="userName"
                            placeholder="Enter your name..." />
                    </label>
                </div>
                <button  type="button" className="btn" data-toggle="modal"
                    data-target="#exampleModal" style={btnStyle}>
                        Click here
                    <span className="spinner-grow my-spinner spinner-grow-sm" role="status" aria-hidden="true" style={marginLeft}></span> 
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <span> <i className="fas  fa-user"></i> </span>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h3>Welcome <strong>{this.state.userName + ' 😎'}</strong>, let's calculate some shit! </h3>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn" style={modalBtn} data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal
