import React from 'react'
import './header.Modules.scss'
import Language from './UI/language'
const Header = () => {
	return (
		<>
			<header className='header'>
				<div className='header__content container'>
					<nav className='menu'>
						<a href='#' className='menu__link'>
							Доставка и оплата
						</a>
						<a href='#' className='menu__link'>
							Контакти
						</a>
						<a href='#' className='menu__link'>
							FAQ
						</a>
					</nav>
					<ul className='header-items'>
						<li className='header__item'>
							<Language />
						</li>
						<li className='header__item'>
							<a href='#' className='header__link'>
								Кешбек:10
							</a>
						</li>
						<li className='header__item'>
							<a href='#' className='header__link'>
								Увійти
							</a>
						</li>
					</ul>
				</div>
			</header>
		</>
	)
}

export default Header
