import React, { useState } from 'react'
import './pagination.Modules.scss'
const Pagination = () => {
	const [num, setNum] = useState<number>(0)
	const name:string[] = [
		'Каталог товарів',
		'Акції',
		'Популярне ',
		'Рod системи ',
		'Одноразові ',
		'Рідини ',
		'Блог',
	]
	return (
		<section className='pagination'>
			<div className='pagination__content container'>
				<ul className='pagination__items'>
					{name.map((e, i) => (
						<li key={e} onClick={()=> setNum(i)} className={`pagination__item + ${num === i? 'active': ''}`}>
							<a href='#' className='pagination__link'>
								{e}
							</a>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Pagination
