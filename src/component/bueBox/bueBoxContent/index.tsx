import React, { useState } from 'react'
import LikeSetting from '../../UI/likeSetting'
import './bueBoxContent.Module.scss'
import { Rating } from 'react-simple-star-rating'
import FilterColor from '../../filter/filterColor'
import FilterTeg from '../../filter/filterTeg'
import Buttons from '../../UI/button/buyButton'
import Cashback from '../../UI/cashback'
import { AppDispatch, AppSelector } from '../../../redux/hook'
import { setBasketDB } from '../../../redux/slice/cartSlice'
import CalkulatorBue from '../../calkulator/calkulatorBue'
type IProps = {
    setPopupSwitch: React.Dispatch<React.SetStateAction<boolean>>
}
const BueBoxContent = ({setPopupSwitch}:IProps) => {
    const basketDB = AppSelector(state => state.cartSlice.BasketDBState)
    const dispath = AppDispatch()
    const [sumElement, setSumElement] = useState(1)
    const cartBueCart = AppSelector(state => state.cartSlice.cartBue)
	const itemVan: string[] = ['Легкий', 'Середній', 'Важкий']
	const itemTo: string[] = [
		'Лимон',
		"М'ята",
		'Чорниця',
		'Ваніль',
		'Киви',
		'Сладкий',
		'Середній',
		'Важкий',
	]
	const [rating, setRating] = useState(0)
	const handleRating = (rate: number) => {
		setRating(rate)
	}
    const addBasket = () => {
        const basket = basketDB
        const priceProduct = cartBueCart.price * sumElement
        const newProduct = {...cartBueCart, amount: sumElement, price: priceProduct} 
        console.log(newProduct)
        dispath(setBasketDB(basket.concat([newProduct])))
        setPopupSwitch(true)
    }
	return (
		<div className='bue-content'>
			<div className='bue-content__header'>
				<p className='bue-content__status'>В наявності</p>
				<LikeSetting active={false} />
			</div>
			<div className='bue-content__rating'>
				<p className='bue-content__reviews'>{cartBueCart.reviews.length} відгуків</p>
				<Rating
					onClick={handleRating}
					initialValue={4}
					ratingValue={rating}
					size={20}
				/>
			</div>
			<div className='bue-content__recommend'>
				<h5 className='bue-content__search'>Знайти сумісні товари</h5>
				<button className='bue-content__cor'>
					<p>Кальянна затяжка</p>
					<svg
						width='42'
						height='51'
						viewBox='0 0 42 51'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g clip-path='url(#clip0_180_9464)'>
							<path
								d='M38.6929 33.4643C38.3255 34.1663 37.9213 34.8313 37.6273 35.5333C37.2599 36.42 36.7087 37.3806 36.7087 38.3043C36.6719 40.632 36.5617 41.0384 34.3202 41.0384C31.7113 41.0754 29.1024 40.8906 26.5302 40.4842C25.2441 40.2995 24.6929 40.5211 24.4357 41.7034C24.2887 42.4793 23.8845 43.2552 23.9213 44.0311C24.0683 48.6864 23.811 53.4156 24.6929 57.9601C25.3176 61.1376 27.4488 64.0564 28.9921 67.0491C29.727 68.527 30.5722 69.931 31.3438 71.3719C31.2704 71.5566 31.1969 71.7783 31.0866 71.9631C29.7638 71.8892 28.3675 72 27.0814 71.7044C19.3281 70.0049 12.1627 66.9752 6.50395 61.1006C3.19686 57.6646 2.13125 53.6743 4.22573 49.1298C5.29135 46.8021 6.1365 44.3267 7.2756 42.036C9.59056 37.3437 9.03938 32.7253 6.94489 28.2178C6.02626 26.2965 4.9239 24.4492 3.67455 22.7127C-0.440932 16.912 -0.992113 10.668 1.50657 4.16529C3.12337 -0.0466726 6.4672 -2.63296 10.8032 -3.40885C18.2992 -4.81284 25.4646 -3.88916 31.6011 1.13563C36.3412 5.01507 38.6929 9.85513 37.6641 16.247C37.4436 17.7248 38.3622 19.4983 39.0604 21.0131C39.6116 22.1954 40.6772 23.1561 41.4856 24.2275C42.294 25.299 42.147 26.2227 40.9344 26.7769C38.9134 27.7375 38.2887 29.1045 39.1706 31.2474C39.3543 31.7278 38.7297 32.5775 38.4724 33.2795C38.5459 33.3534 38.6194 33.3904 38.6929 33.4643Z'
								fill='#F6F6F6'
							/>
							<path
								d='M35 32.5C35 33.8807 29.2335 35 27.7273 35C26.221 35 25 33.8807 25 32.5C25 31.1193 26.221 30 27.7273 30C29.2335 30 35 31.1193 35 32.5Z'
								fill='#C4C4C4'
							/>
							<path
								d='M10.5004 55.5C8.00039 45 19.5004 34 23.5004 33C18.0008 39.5 19 43 21 50C23 57 13.0004 66 10.5004 55.5Z'
								fill='#C4C4C4'
							/>
						</g>
					</svg>
				</button>
			</div>
			<FilterColor />
			<FilterTeg name={'Міцність'} items={itemVan} />
			<FilterTeg name={'Смак'} items={itemTo} />
			<div className='bue-content__num-price'>
				 <CalkulatorBue sumElement={sumElement}  setSumElement={setSumElement}/> 
				<div className='bue-content__left-item'>
					<div className='bue-content__price-sale'>
						<p className='bue-content__sale'>{sumElement * cartBueCart.sale} ₴</p>
						<h6 className='bue-content__price'>{sumElement * cartBueCart.price} ₴</h6>
					</div>
					<Cashback/>
				</div>
			</div>
			<div className='bue-content__btn'>
                <div onClick={()=> addBasket()} className="bue-content__btn-inner">
				    <Buttons svg={true} width={340}>в кошик</Buttons>
                </div>
				<button className='bue-content__free'>
					<svg
						width='17'
						height='14'
						viewBox='0 0 17 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M16.392 5.91668L15.5587 4.25001C15.3542 3.82486 15.0337 3.46622 14.6341 3.21554C14.2345 2.96486 13.7721 2.83235 13.3003 2.83334H11.0003C11.0003 2.1703 10.7369 1.53442 10.2681 1.06558C9.79925 0.596736 9.16337 0.333344 8.50033 0.333344H2.66699C2.00395 0.333344 1.36807 0.596736 0.899225 1.06558C0.430384 1.53442 0.166992 2.1703 0.166992 2.83334V9.50001C0.169511 10.036 0.344197 10.5569 0.665286 10.986C0.986375 11.4151 1.43687 11.7297 1.95033 11.8833C2.10597 12.382 2.4139 12.8194 2.83089 13.1341C3.24787 13.4487 3.75296 13.6249 4.27519 13.6377C4.79742 13.6506 5.31056 13.4996 5.74255 13.2058C6.17453 12.9121 6.50364 12.4904 6.68366 12H10.317C10.4922 12.4826 10.8117 12.8996 11.2321 13.1943C11.6526 13.489 12.1536 13.6471 12.667 13.6471C13.1804 13.6471 13.6814 13.489 14.1019 13.1943C14.5223 12.8996 14.8418 12.4826 15.017 12H15.167C15.609 12 16.0329 11.8244 16.3455 11.5119C16.6581 11.1993 16.8337 10.7754 16.8337 10.3333V7.83334C16.8415 7.16836 16.6901 6.51116 16.392 5.91668ZM1.83366 2.83334C1.83366 2.61233 1.92146 2.40037 2.07774 2.24409C2.23402 2.08781 2.44598 2.00001 2.66699 2.00001H8.50033C8.72134 2.00001 8.9333 2.08781 9.08958 2.24409C9.24586 2.40037 9.33366 2.61233 9.33366 2.83334V10.3333H6.68366C6.5165 9.87107 6.21676 9.46833 5.82193 9.17549C5.4271 8.88266 4.9547 8.71272 4.46381 8.68693C3.97291 8.66114 3.48531 8.78064 3.06197 9.0305C2.63863 9.28035 2.29834 9.64946 2.08366 10.0917C2.00492 10.0145 1.94228 9.92246 1.89936 9.8209C1.85645 9.71933 1.83412 9.61027 1.83366 9.50001V2.83334ZM4.33366 12C4.16884 12 4.00772 11.9511 3.87068 11.8596C3.73364 11.768 3.62683 11.6379 3.56376 11.4856C3.50069 11.3333 3.48418 11.1658 3.51634 11.0041C3.54849 10.8425 3.62786 10.694 3.7444 10.5774C3.86095 10.4609 4.00943 10.3815 4.17108 10.3494C4.33273 10.3172 4.50029 10.3337 4.65256 10.3968C4.80483 10.4599 4.93498 10.5667 5.02655 10.7037C5.11812 10.8407 5.16699 11.0019 5.16699 11.1667C5.16699 11.3877 5.07919 11.5997 4.92291 11.7559C4.76663 11.9122 4.55467 12 4.33366 12ZM12.667 12C12.5022 12 12.3411 11.9511 12.204 11.8596C12.067 11.768 11.9602 11.6379 11.8971 11.4856C11.834 11.3333 11.8175 11.1658 11.8497 11.0041C11.8818 10.8425 11.9612 10.694 12.0777 10.5774C12.1943 10.4609 12.3428 10.3815 12.5044 10.3494C12.6661 10.3172 12.8336 10.3337 12.9859 10.3968C13.1382 10.4599 13.2683 10.5667 13.3599 10.7037C13.4515 10.8407 13.5003 11.0019 13.5003 11.1667C13.5003 11.3877 13.4125 11.5997 13.2562 11.7559C13.1 11.9122 12.888 12 12.667 12ZM15.167 10.3333H15.017C14.8451 9.84705 14.5269 9.42584 14.1062 9.12746C13.6855 8.82908 13.1828 8.66813 12.667 8.66668C12.0503 8.67035 11.4567 8.90185 11.0003 9.31668V7.00001V4.50001H13.3003C13.4556 4.49893 13.6081 4.54127 13.7407 4.62226C13.8732 4.70324 13.9804 4.81965 14.0503 4.95834L14.242 5.34168H12.667C12.446 5.34168 12.234 5.42947 12.0777 5.58575C11.9215 5.74203 11.8337 5.954 11.8337 6.17501C11.8337 6.39602 11.9215 6.60799 12.0777 6.76427C12.234 6.92055 12.446 7.00834 12.667 7.00834H15.0253C15.1178 7.27362 15.1657 7.5524 15.167 7.83334V10.3333ZM6.00033 6.16668V4.50001C6.00033 4.279 6.08812 4.06703 6.2444 3.91075C6.40068 3.75447 6.61265 3.66668 6.83366 3.66668C7.05467 3.66668 7.26663 3.75447 7.42291 3.91075C7.57919 4.06703 7.66699 4.279 7.66699 4.50001V6.16668C7.66699 6.38769 7.57919 6.59965 7.42291 6.75593C7.26663 6.91221 7.05467 7.00001 6.83366 7.00001C6.61265 7.00001 6.40068 6.91221 6.2444 6.75593C6.08812 6.59965 6.00033 6.38769 6.00033 6.16668Z'
							fill='#222221'
						/>
					</svg>
					Безкоштовна доставка від 500 грн
				</button>
			</div>
		</div>
	)
}

export default BueBoxContent
