import React from 'react';
import './checkoutFormInput.Module.scss'

type Input ={
	name:string,
	placeholder:string,
}

const CheckoutFormInput = ({name, placeholder}: Input) => {

	return (
		<>
			<p className='checkout-form__desc'>{name}</p>
			<input type='text' className='checkout-form-input' placeholder={placeholder} />
		</>
	)
};

export default CheckoutFormInput;