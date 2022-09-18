import React, {useRef, useState} from 'react'
import Cart from '../cart'
import './cartItems.Module.scss'
import { Navigation,  A11y,  } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
interface IItem {
	image: string
	name: string
	price: number
	sale: number
	type:string
}
interface IProps {
	title?: string
	item: IItem[]
}
const CartItems = ({ title, item }: IProps) => {
	const [open, setOpen] = useState<number>(55)
	
	return (
		<section className='cart-items'>
			<div className='items-cart'>
				<div className='items-cart__header'>
					<h3 className='items-cart__title'>{title}</h3>
					<div className='items-cart__control'>
						<h5 className='items-cart__desc'>Дивитися всі новинки</h5>
					</div>
				</div>
				<div className='items-cart__items'>
					<Swiper
						modules={[Navigation, A11y]}
						spaceBetween={50}
						slidesPerView={4}
						navigation
					>
						{item.map((e, i) => (
							<SwiperSlide key={i}>
								<div
									className='items-cart__wrapper'
									onClick={(): void => setOpen(i)}
								>
									<Cart
										indx={i}
										open={open}
										type={e.type}
										name={e.name}
										image={e.image}
										price={e.price}
										sale={e.sale}
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	)
}

export default CartItems
