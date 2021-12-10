import React from 'react';

const RefSample = () => {
	const input = React.createRef();

	const handleFocus = () => {
		this.input.current.focus();
	}

	return (
		<div>
			<input ref={handleFocus}></input>
		</div>
	);
}

export default RefSample;