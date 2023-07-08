import React from 'react'
import { Link } from 'react-router-dom'
import { AppSelector } from '../../hooks'
import { headerMenu } from './const'
import './Header.scss'
import Language from './Language'
import Navigation from './Navigation'
import Contacts from './Contacts'
import { logo } from '../../_config'
import Search from '../search'
import HeaderButtons from './HeaderButtons'
type IProps = {
	setRegistrationOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({ setRegistrationOpen }: IProps) => {
	const loginUser = AppSelector(state => state.auntificationSlice.userLogin)
	return (
		<>
			<header className='header'>
				<div className='header__top'>
					<div className='header__content container'>
						<nav className='menu'>
							{headerMenu.map(e => (
								<Link key={e.name} to={e.path} className='menu__link'>
									{e.name}
								</Link>
							))}
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
								{loginUser.length >= 1 ? (
									<button className='header__link'>{loginUser}</button>
								) : (
									<button
										onClick={() => setRegistrationOpen(true)}
										className='header__link'
									>
										Увійти
									</button>
								)}
							</li>
						</ul>
					</div>
				</div>
				<div className='header__inner'>
					<section className='navigation'>
						<div className='navigation__content container'>
							<div className='navigation__colum'>
								<Link to='/' className='navigation__logo'>
									<img
										width={217}
										height={60}
										style={{ objectFit: 'contain' }}
										src={logo.header}
										alt='logo'
									/>
								</Link>
								<Search />
							</div>
							<div className='navigation__contact'>
								<Contacts />
							</div>
							<HeaderButtons />
						</div>
					</section>
				</div>
				<Navigation />
			</header>
		</>
	)
}

export default Header
