import React, { useState } from 'react'

interface IProps {
	items: string[]
}
const ImageMin = ({ items }: IProps) => {
	const [num, setNum] = useState<number>(0)
	return (
		<ul className='bue-image__items'>
			{items.map((e, i) => (
				<li key={i} onClick={()=> setNum(i)} className={`bue-image__item ${i === num? 'min-active':''}`}>
					<img width={77} height={70} src={e} alt='bue-item' />
				</li>
			))}
		</ul>
	)
}

export default ImageMin
