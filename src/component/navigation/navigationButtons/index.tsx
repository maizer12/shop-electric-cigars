import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppSelector } from '../../../redux/hook'
const NavigationButtons = () => {
	const BasketItemsDB = AppSelector(state => state.cartSlice.BasketDBState)
	const FavoriteDB = AppSelector(state => state.favoriteSlice.favoritesDB)
	const [activePagination, setActivePagination] = useState<number>(100)
	type IButton = {
		url: string
		text: string
		link: string
		sum: number
	}
	const btn: IButton[] = [
		{
			url: './img/btn/1.svg',
			text: 'Обране',
			link: '/favorites',
			sum: FavoriteDB.length,
		},
		{ url: './img/btn/2.svg', text: 'Порівняння', link: '', sum: 0 },
		{
			url: './img/btn/3.svg',
			text: 'Корзина',
			link: '/basket',
			sum: BasketItemsDB.length,
		},
	]
	return (
		<div className='navigation-buttons'>
			{btn.map((e, i) => (
				<Link
					to={e.link}
					onClick={() => setActivePagination(i)}
					key={e.text}
					className={`navigation-buttons__btn ${
						activePagination === i ? 'navigation-buttons__active' : ''
					}`}
				>
					<div className='navigation-buttons__icon'>
						<span
							className='navigation-buttons__sum'
							style={{ display: e.sum > 0 ? '' : 'none' }}
						>
							{e.sum}
						</span>
						<img src={e.url} alt='btn-icon' />
					</div>
					<p className='navigation-buttons__desc'>{e.text}</p>
				</Link>
			))}
		</div>
	)
}

export default NavigationButtons
