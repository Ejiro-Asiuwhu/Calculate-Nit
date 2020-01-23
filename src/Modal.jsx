import React, { Component } from 'react'


export class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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


    render() {
        const btnStyle = {
            color: '#E3F2FD',
            backgroundColor: '#14868c'
        }
            const nameInput = {
                padding: '.4rem 1.6rem',
                border: '1px solid #000'
}
        return (
            <div>

                <h2>
                    Hello Howdy <span role="img" aria-label="emoji">🐱‍👤</span> 
</h2>
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
                <div className="spinner-grow text-dark" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div>
                    <label htmlFor="userName">
                        <input style={nameInput} autoFocus type="text" value={this.state.userName} onChange={this.handleChange} id="userName" name="userName"
                            placeholder="Enter your name..." />
                    </label>
                </div>
                <button onClick={this.state.userName} type="button" className="btn" data-toggle="modal"
                    data-target="#exampleModal" style={btnStyle}>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> click here
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <h3>Welcome {this.state.userName + ' 😎'}, let's calculate some shit! </h3>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal