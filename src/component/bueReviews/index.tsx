import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import './bueReviews.Modules.scss'
import ReviewsItem from './reviewsItem'
import CartItems from '../cartItems'
import ReviewsButton from '../UI/button/reviewsButton'
const BueReviews = () => {
	const [rating, setRating] = useState(0)
	const handleRating = (rate: number) => {
		setRating(rate)
	}
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
		<section className='reviews'>
			<div className='reviews-header'>
				<div className='reviews-header__left'>
					<Rating
						onClick={handleRating}
						initialValue={4}
						ratingValue={rating}
						size={28}
					/>
					<div className='reviews-header__num'>4/5</div>
					<div className='reviews-header__sum'>225 відгуків</div>
				</div>
				<button className='reviews-header__btn'>
					<ReviewsButton>Написати відгук</ReviewsButton>
				</button>
			</div>
			<div className='reviews-sort'>
				<h3 className='reviews-sort__title'>Відгуки</h3>
				<div className='reviews-sort__right'>
					<h6 className='reviews-sort__name'>Рейтнг:</h6>
					<select className='reviews-select'>
						<option className='reviews-select__option' value='html'>
							Спочатку нові
						</option>
					</select>
				</div>
			</div>
			<div className='reviews__items'>
				<ReviewsItem name={'Анатоли'} />
				<ReviewsItem name={'Максим'} />
				<ReviewsItem name={'Иван'} />
				<ReviewsItem name={'Илон'} />
			</div>
			<CartItems item={itemSale} title={'Вас можуть зацікавити'} />
		</section>
	)
}

export default BueReviews
