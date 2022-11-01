import React from 'react'
import { Link } from 'react-router-dom'
import { AppSelector } from '../../redux/hook'
import './header.Modules.scss'
import Language from './UI/language'
type IProps = {
    setRegistrationOpen:React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({setRegistrationOpen}:IProps) => {
    const loginUser = AppSelector(state => state.auntificationSlice.userLogin)
	return (
		<>
			<header className='header'>
				<div className='header__content container'>
					<nav className='menu'>
						<Link to='/delivery-dispatch' className='menu__link'>
							Доставка и оплата
						</Link>
						<a href='#' className='menu__link'>
							Контакти
						</a>
						<Link to='/faq' className='menu__link'>
							FAQ
						</Link>
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
						<li className='header__item'>{
                            loginUser.length >= 1?
                            <button className='header__link'>
                                {loginUser}
                            </button>
                        :
							<button onClick={()=> setRegistrationOpen(true)} className='header__link'>
								Увійти
							</button>}
						</li>
					</ul>
				</div>
			</header>
		</>
	)
}

export default Header
