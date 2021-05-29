// your Bomb code here!

import React, { Component } from "react";

class BombComponent extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render() {
        if (this.state.secondsLeft == 0) {
            return(<h1>Boom!</h1>)
        }
        return (
            <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
        )
    }
}

export default BombComponent