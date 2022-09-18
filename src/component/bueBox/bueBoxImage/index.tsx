import React, { useState } from 'react'
import './bueBoxImage.Module.scss'
import ImageMin from './imageMin'
const BueBoxImage = () => {
	const [minImage, setMinImage] = useState<string[]>([
		'./img/cart/1.png',
		'./img/cart/1.png',
		'./img/cart/1.png',
		'./img/cart/1.png',
	])
	return (
		<div className='bue-image'>
			<div className='bue-image__content'>
				<div className='bue-image__type'></div>
				<img width={540} height={494} src='./img/cart/1.png' alt='bue-img' />
			</div>
			<ImageMin items={minImage}/>
		</div>
	)
}

export default BueBoxImage
