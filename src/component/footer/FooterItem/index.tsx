import React from 'react'

interface IProp {
	link: string[],
	name:string
}

const FooterItem = ({ link, name}: IProp) => {
	return (
		<ul className='footer-items'>
			<li className='footer-items__item'>
				<h5 className='footer-items__name'>{name}</h5>
			</li>
			<li className='footer-items__item'>
				{link.map(e => (
					<a href='#' key={e} className='footer-items__link'>
						{e}
					</a>
				))}
			</li>
		</ul>
	)
}

export default FooterItem
