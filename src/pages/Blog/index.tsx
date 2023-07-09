import React from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import './blog.Module.scss'
import BlogItem from '../../components/BlogItem'
import BlogDB from '../../services/newsItems.json'
const Blog = () => {
	const breadcrumbs = ['Блог', 'Поради']
	return (
		<main className='blog'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h2 className='blog__title'>Поради</h2>
			<div className='blog__items'>
				<BlogItem images={BlogDB} />
			</div>
		</main>
	)
}

export default Blog
