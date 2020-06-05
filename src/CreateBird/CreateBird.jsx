import React, { Component } from 'react';
import { postBird } from '../services/birds.js';

class CreateBird extends Component {
    state = {
        bird: '',
        season: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { bird, season } = this.state;
        postBird(bird, season);
    }

    render() {
        const { bird, season } = this.state;

        return (
            <form>
            <input type="text" name="bird" value={bird} onChange={this.handleChange} />
            <input type="text" name="season" value={season} onChange={this.handleChange}/>
            <button>Submit</button>
            </form>
        )
    }
};

export default CreateBird;