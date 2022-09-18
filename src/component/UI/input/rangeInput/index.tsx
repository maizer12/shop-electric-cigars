import React, { useState } from 'react';
import './rangeInput.Module.scss'
const RangeInput = () => {
	const [inputRange, setInputRange] = useState<string>('0')
	return (
		<>
			<input
				value={inputRange}
				onChange={event => setInputRange(event.target.value)}
				className='range-input'
				min='1'
				max='84568'
				type='range'
			/>
			<p className='range-text'>{inputRange}</p>
		</>
	)
};

export default RangeInput;