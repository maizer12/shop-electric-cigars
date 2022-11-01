import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppSelector } from '../../../redux/hook'
const NavigationButtons = () => {
    const BasketItemsDB = AppSelector(state => state.cartSlice.BasketDBState)
	const [activePagination, setActivePagination] = useState<number>(100)
	type IButton = {
		url: string
		text: string
		link: string
	}
	const btn: IButton[] = [
		{ url: './img/btn/1.svg', text: 'Обране', link: '' },
		{ url: './img/btn/2.svg', text: 'Порівняння', link: '' },
		{ url: './img/btn/3.svg', text: 'Корзина', link: '/basket' },
	]
	return (
		<div className='navigation-buttons'>
			{btn.map((e, i) => (
				<Link to={e.link}
					onClick={() => setActivePagination(i)}
					key={e.text}
					className={`navigation-buttons__btn ${
						activePagination === i ? 'navigation-buttons__active' : ''
					}`}
				>
					<div className='navigation-buttons__icon'>
                        {i === 0 || i === 2? <span className='navigation-buttons__sum'>{i === 2? BasketItemsDB.length: 0}</span>:''}
						<img src={e.url} alt='btn-icon' />
					</div>
					<p className='navigation-buttons__desc'>{e.text}</p>
				</Link>
			))}
		</div>
	)
}

export default NavigationButtons
