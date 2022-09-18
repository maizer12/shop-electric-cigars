import React from 'react'
import Breadcrumbs from '../../component/breadcrumbs'
import ReviewsButton from '../../component/UI/button/reviewsButton'
import Button from '../../component/UI/button'
import './basket.Module.scss'
import BasketItems from './basketItems'
const Basket = () => {
	return (
		<main className='basket'>
			<Breadcrumbs />
			<h2 className='basket__title'>Корзина</h2>
			<BasketItems />
			<BasketItems />
			<BasketItems />
			<section className='basket-bue'>
				<div className='basket-bue__price-cashback'>
					<div className='basket-bue__cashback'>
						<p className='basket-bue__cashback-text'>Кешбек:</p>
						<h5 className='basket-bue__cashback-num'>40</h5>
					</div>
					<div className='basket-bue__price'>
						<h6 className='basket-bue__price-text'>Всього:</h6>
						<h4 className='basket-bue__price-num'>2396$</h4>
					</div>
				</div>
				<div className='basket-bue__buttons'>
					<ReviewsButton children={'ПРОДОВЖИТИ ПОКУПКИ'} />
					<Button width={228} svg={false} children={'ОФОРМИТИ ЗАМОВЛЕННЯ'} />
				</div>
			</section>
		</main>
	)
}

export default Basket
