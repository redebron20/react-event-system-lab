// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

    onKeyUp = () => console.log('Entering password...')
  
    render() {
        return (
            <input onKeyUp={this.onKeyUp} type="password" />
        )
    }
}