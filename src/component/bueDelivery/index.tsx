import React from 'react'
import CartItems from '../cartItems'
const BueDelivery = () => {
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
		<section className='bue-delivery'>
			<p className='bue-delivery__text'>
				<span>
					В W01, як зарядний пристрій використовує класичний кабель micro-USB,
					позбавляючи від необхідності носити з собою зарядний пристрій.
				</span>
				Зовнішній вигляд - строгі лінії, компактні габарити і максимально
				лаконічний дизайн без яскравих гравіювань. Корпус батареї виготовлений з
				приємного на дотик пластика. По центру блоку розташований невеликий
				світлодіодний індикатор, який горить трьома різними кольорами в
				залежності від заряду акумулятора (зелений - повний заряд, синій -
				середній заряд і червоний - низький заряд). Картридж перезаправлятися,
				має обсяг 0.7 мл і опір 1.8 Ом.
			</p>
			<CartItems item={itemSale} title={'Вас можуть зацікавити'} />
		</section>
	)
}

export default BueDelivery
