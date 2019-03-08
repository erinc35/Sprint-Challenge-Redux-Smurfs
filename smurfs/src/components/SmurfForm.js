import React, { Component } from 'react';

export default class SmurfForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.props.isUpdatingSmurf) {
            this.props.updateSmurf(e);
        }else {
            this.props.addNewSmurf(e);
        }
    }


    render() {
        return (
            <div>
                <h1>Smurf Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleSmurfInput}
                        value={this.state.name}
                        name="name"
                        placeholder="Name"
                        className='create-input mr-sm-2'
                    />
                    <input
                        onChange={this.handleSmurfInput}
                        value={this.state.age}
                        name="age"
                        placeholder="Age"
                        className='create-input mr-sm-2'
                    />
                    <input
                        onChange={this.handleSmurfInput}
                        value={this.state.height}
                        name="height"
                        placeholder="Height"
                        className='create-input mr-sm-2'
                    />
                    <button className='create-button' onClick={this.handleClick}>Add Smurf</button>
                </form>
            </div>
        );
    }
}