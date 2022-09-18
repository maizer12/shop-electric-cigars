import React from 'react'
import NewsItem from './news-item/NewsItem'
import './news.Module.scss'


const News = () => {
	const images: string[] = [
		'./img/news/1.jpg',
		'./img/news/2.jpg',
		'./img/news/3.jpg',
	]
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
