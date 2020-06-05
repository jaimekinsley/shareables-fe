import React, { Component } from 'react'

export default class CreateBird extends Component {
    state = {
        bird: '',
        season: '',
        spotted: ''
    }

    handleChange = (e) => {
        this.setState({ [e.target.bird]: e.target.value })
    }

    render() {
        const { bird, season, spotted } = this.state;

        return (
            <form>
            <input type="text" name="bird" value={bird} onChange={} />
            <input type="text" name="season" value={season} onChange={}></textarea>
            <button>Submit</button>
            </form>
        )
    }
}
