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
				max='46568'
				type='range'
			/>
            <span className='ranget-text'>Ціна:</span>
            <input value={inputRange} onChange={(e)=> setInputRange(e.target.value)} type="number" className="range-text" />
		</>
	)
};

export default RangeInput;