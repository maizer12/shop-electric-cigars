import React, { useState } from 'react'
import './pagination.Modules.scss'
import {Link} from 'react-router-dom'
type itemsObject ={
    name:string,
    link:string
}
const Pagination = () => {
	const [num, setNum] = useState<number>(0)
	const name:itemsObject[] = [
		{name:'Каталог товарів', link:'/'},
		{name:'Акції', link:'/catalog'},
		{name:'Популярне ', link:'/blog'},
		{name:'Рod системи', link:'/blog'},
		{name:'Одноразові', link:'/blog'},
		{name:'Рідини ', link:'/blog'},
		{name:'Блог', link:'/blog'},
	]
	return (
		<section className='pagination'>
			<div className='pagination__content container'>
				<ul className='pagination__items'>
					{name.map((e, i) => (
						<li key={e.name} onClick={()=> setNum(i)} className={`pagination__item + ${num === i? 'active': ''}`}>
							<Link to={e.link} className='pagination__link'>
								{e.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Pagination
