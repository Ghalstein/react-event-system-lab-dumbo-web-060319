// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

	handleInputKeyUp = () => console.log('Entering password...')

	render() {
		return (
			<div>
				<input onKeyUp={this.handleInputKeyUp} type="password" />
			</div>
		)
	}
}