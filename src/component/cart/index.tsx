import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import Buttons from '../UI/button'
import LikeSetting from '../UI/likeSetting'
import './cart.Module.scss'
import { Link } from 'react-router-dom'
interface IProps {
	name: string
	price: number
	sale: number
	image: string
	type: string
	open: number
	indx: number
}
function tc(a: string) {
	if (a === 'NEW') {
		return 'radial-gradient(131.25% 131.25% at 50.68% 131.25%, #461E4D 0%, #92499E 100%),linear-gradient(0deg, #C4C4C4, #C4C4C4)'
	} else if (a === 'Скидка') {
		return 'radial-gradient(131.25% 131.25% at 50.68% 131.25%, #DF3616 0%, #FF7D65 100%)'
	} else if (a === 'HOT') {
		return 'radial-gradient(131.25% 131.25% at 50.68% 131.25%, #A3260F 0%, #DF3616 100%)'
	}
}

const Cart = ({ name, price, sale, image, type, open, indx }: IProps) => {
	const [rating, setRating] = useState(0)
	const handleRating = (rate: number) => {
		setRating(rate)
	}
	return (
		<>
			<div className={`cart ${indx === open ? 'active-cart' : ''}`}>
				<div className='cart__img'>
					<div className='cart__type'>
						<span
							className='cart__type-span'
							style={{ background: tc(type) }}
						></span>
						<h4 className='cart__type-text'>{type}</h4>
					</div>
					<img src={image} alt='cart' />
				</div>
				<h4 className='cart__title'>{name}</h4>
				<div className='cart__rating'>
					<div className='cart__star'>
						<Rating
							onClick={handleRating}
							initialValue={4}
							ratingValue={rating}
							size={20}
						/>
					</div>
					<div className='cart__reviews'>225 відгуків</div>
				</div>
				<div className='cart__price-status'>
					<div className='cart__price'>
						<h4 className='cart__num'>{price} ₴</h4>
						<p className='cart__sale'>{sale} ₴</p>
					</div>
					<p className='cart__status'>в наявності</p>
				</div>
				<div className={`cart-bottom ${indx === open ? 'active' : ''}`}>
					<Link to='bue'>
						<Buttons width={141}>в кошик</Buttons>
					</Link>
					<div className='cart-bottom__icons'>
						<LikeSetting />
					</div>
				</div>
			</div>
		</>
	)
}

export default Cart
