import React from 'react'
import NewsItem from '../blogItem'
import './news.Module.scss'
import newsData from '../../services/blogItems.json'

const News = () => {
	const images: string[] = newsData.filter((e, i) => i <= 2)
	return (
		<section className='news'>
			<h3 className='news__title'>Новини</h3>
			<div className='news__items'>
				<NewsItem images={images} />
			</div>
		</section>
	)
}

export default News
