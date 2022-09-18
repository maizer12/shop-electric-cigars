import React from 'react';
import CartItems from '../cartItems';
const BueCompatible = () => {
	const itemSale = [
		{
			image: './img/cart/2.png',
			name: 'Augvape Druga Squonker Kit model Q445',
			price: 599,
			sale: 799,
			type: 'NEW',
		},
		{
			image: './img/cart/3.png',
			name: 'Augvape Druga Squonker Kit model Q445',
			price: 599,
			sale: 799,
			type: 'Скидка',
		},
		{
			image: './img/cart/1.png',
			name: 'Augvape Druga Squonker Kit model Q445',
			price: 399,
			sale: 799,
			type: 'HOT',
		},
		{
			image: './img/cart/4.png',
			name: 'Augvape Druga Squonker Kit model Q445',
			price: 299,
			sale: 799,
			type: 'NEW',
		},
		{
			image: './img/cart/1.png',
			name: 'Augvape Druga Squonker Kit model Q445',
			price: 699,
			sale: 899,
			type: 'Скидка',
		},
		{
			image: './img/cart/1.png',
			name: 'Augvape Druga Squonker Kit model Q445',
			price: 499,
			sale: 799,
			type: 'HOT',
		},
		{
			image: './img/cart/2.png',
			name: 'Augvape Druga Squonker Kit model Q445',
			price: 599,
			sale: 799,
			type: 'NEW',
		},
	]
	return (
		<section className='bue-compatible'>
			<CartItems item={itemSale} title={'Картриджі'} />
			<CartItems item={itemSale} title={'Рідини'} />
			<CartItems item={itemSale} title={'Вас можуть зацікавити'} />
		</section>
	)
};

export default BueCompatible;