import React from 'react'
import BestReviewsItem from './bestReviewsItem'
import './bestReviews.Modules.scss'
import ReviewsButton from '../../UI/button/reviewsButton'
import CartItems from '../../cartItems'
const BestReviews = () => {
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
		<section className='best-reviews'>
			<div className='best-reviews__header'>
				<div className='reviews-colum'>
					<h3 className='reviews-colum__title'>Поставити питання</h3>
					<p className='reviews-colum__desc'>
						Напишіть нам в любому зручному для вас месенджері або відправте
						запит
					</p>
				</div>
				<div className='social-reviews'>
					<a href='#' className='social-reviews__link'>
						<img
							src='./img/social/1.svg'
							alt='social'
							className='socials__icon'
						/>
					</a>
					<a href='#' className='social-reviews__link'>
						<img
							src='./img/social/2.svg'
							alt='social'
							className='socials__icon'
						/>
					</a>
					<a href='#' className='social-reviews__link'>
						<img
							src='./img/social/3.svg'
							alt='social'
							className='socials__icon'
						/>
					</a>
				</div>
				<ReviewsButton>Поставити запитання</ReviewsButton>
			</div>
			<div className='best-reviews__items'>
				<BestReviewsItem />
				<BestReviewsItem />
				<BestReviewsItem />
				<BestReviewsItem />
				<BestReviewsItem />
			</div>
			<CartItems item={itemSale} title={'Вас можуть зацікавити'} />
		</section>
	)
}

export default BestReviews
