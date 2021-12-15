import React, { Component } from 'react';

class LifeCycleSample extends Component {
	state = {
		number: 0,
		color: null,
	}
	render() {
		return (
			<div>
				<h1>{this.state.number}</h1>
				<p>color: {this.state.color}</p>
				<button>더하기</button>
			</div>
		);
	}
}

export default LifeCycleSample;