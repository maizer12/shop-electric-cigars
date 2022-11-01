import React from 'react';
import CartItems from '../cartItems';
import CartDB from '../../json/cartItemsDB.json'
const BueCompatible = () => {
	return (
		<section className='bue-compatible'>
			<CartItems item={CartDB} title={'Картриджі'} />
			<CartItems item={CartDB} title={'Рідини'} />
			<CartItems item={CartDB} title={'Вас можуть зацікавити'} />
		</section>
	)
};

export default BueCompatible;