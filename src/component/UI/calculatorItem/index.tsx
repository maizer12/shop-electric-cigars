import React, { useState } from 'react'
import './calculatorItem.Module.scss'
const CalculatorItem = () => {
	const [number, setNumber] = useState<number>(0)
	return (
		<div className='calculator-item'>
			<button
				onClick={() => setNumber(number + 1)}
				className='calculator-item__btn'
			>
				+
			</button>
			<h6 className='calculator-item__input'>{number}</h6>
			<button
				onClick={() => setNumber(number > 0? number - 1: 0)}
				className='calculator-item__btn'
			>
				-
			</button>
		</div>
	)
}

export default CalculatorItem
