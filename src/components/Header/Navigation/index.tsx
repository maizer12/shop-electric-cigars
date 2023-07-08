import './Navigation.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
type itemsObject = {
	name: string
	link: string
}
function Navigation() {
	const [num, setNum] = useState<number>(0)
	const name: itemsObject[] = [
		{ name: 'Каталог товарів', link: '/' },
		{ name: 'Акції', link: '/catalog' },
		{ name: 'Популярне ', link: '/catalog' },
		{ name: 'Рod системи', link: '/catalog' },
		{ name: 'Одноразові', link: '/catalog' },
		{ name: 'Рідини ', link: '/catalog' },
		{ name: 'Блог', link: '/blog' },
	]
	return (
		<nav className='navigation'>
			<div className='navigation__content container'>
				<ul className='navigation__items'>
					{name.map((e, i) => (
						<li
							key={e.name}
							onClick={() => setNum(i)}
							className={`navigation__item + ${num === i ? 'active' : ''}`}
						>
							<Link to={e.link} className='navigation__link'>
								{!i && <img src='./img/navbar.svg' alt='catalog' />}
								{e.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default Navigation
