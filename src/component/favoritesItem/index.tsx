import React from 'react'
import BuyButton from '../UI/button/buyButton'
import './favoritesItem.Module.scss'
const FavoritesItem = () => {
	return (
		<li className='favorites-item'>
			<div className='favorites-item__icon'>
				<img
					src='./img/cart/1.png'
					alt='favorites'
					className='favorites-item__img'
				/>
			</div>
			<h5 className='favorites-item__name'>
				Augvape Druga Squonker Kit model Q445
			</h5>
			<h6 className='favorites-item__price'>Ціна: 299$</h6>
			<div className='favorites-item__buttons'>
				<button className='favorites-item__btn'>
					<img
						src='./img/btn/1.svg'
						alt='remove'
						className='favorites-item__img-remove'
					/>
				</button>
				<BuyButton width={220}>Купить</BuyButton>
			</div>
		</li>
	)
}

export default FavoritesItem
