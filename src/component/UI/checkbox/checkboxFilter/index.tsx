import React from 'react';
import './checkboxFilter.Module.scss'
const CheckboxFilter = () => {
	return (
		<div className='checkbox'>
			<input type='checkbox' id='pizza' />
			<label className='checkbox__text' htmlFor='pizza'>
				Пицца
			</label>
		</div>
	)
};

export default CheckboxFilter;