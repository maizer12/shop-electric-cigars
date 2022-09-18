import React, {useState} from 'react';
import './paginationCards.Module.scss'

interface IProps {
	sumCart:number
}

const PaginationCards = ({ sumCart }:IProps) => {
	const numElem: number[] = []
	for (let i = 1; i <= Math.ceil(sumCart / 12); i++) {
		numElem.push(i)
	}
	return (
		<div className='cards-pagination'>
			{numElem.map((e, i) => (
				<div className='cards-pagination__item'>{e}</div>
			))}
		</div>
	)
}

export default PaginationCards;