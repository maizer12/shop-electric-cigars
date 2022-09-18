import React from 'react'
import Search from '../search'
import './navigation.Module.scss'
import NavigationButtons from './navigationButtons'
import NavigationContact from './navigationContact'
import { Link } from 'react-router-dom'
const Navigation = () => {
	return (
		<section className='navigation'>
			<div className='navigation__content container'>
				<div className='navigation__colum'>
					<Link to='/' className='navigation__logo'>
						<img
							width={217}
							height={60}
							style={{ objectFit: 'contain' }}
							src='./img/logo.svg'
							alt='logo'
						/>
					</Link>
					<Search />
				</div>
				<div className='navigation__contact'>
					<NavigationContact />
				</div>
				<NavigationButtons />
			</div>
		</section>
	)
}

export default Navigation
