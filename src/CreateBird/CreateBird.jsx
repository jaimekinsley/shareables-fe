import React, { Component } from 'react';
import { postBird } from '../services/birds.js';

export default class CreateBird extends Component {
    state = {
        bird: '',
        season: '',
        spotted: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        postBird(this.state.bird, this.state.season)
    }

    render() {
        const { bird, season, spotted } = this.state;

        return (
            <form>
            <input type="text" name="bird" value={bird} onChange={this.handleChange} />
            <input type="text" name="season" value={season} onChange={this.handleChange}/>
            <button>Submit</button>
            </form>
        )
    }
}
