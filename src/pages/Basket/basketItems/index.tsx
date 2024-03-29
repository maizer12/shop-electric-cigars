import React, { useEffect, useMemo, useState } from 'react'
import CalkulatorBasket from '../../../components/Calkulator/calkulatorBasket'
import Cashback from '../../../components/UI/Cashback'
import './basketItems.Module.scss'
import ICart from '../../../types/ICart'
import { AppDispatch } from '../../../hooks'
import { setBasketDB } from '../../../store/slice/cartSlice'
type IProps = {
	BasketDB: ICart[]
}
const BasketItems = ({ BasketDB }: IProps) => {
	const dispatch = AppDispatch()
	const [amountIndex, setAmountIndex] = useState({ sum: 1, index: 2, type: '' })
	function test(sum: number, b: number) {
		if (sum === 1) {
			return b * 2
		} else if (amountIndex.type === '') {
			return (b / sum) * (sum + 1)
		}
		return (b / sum) * (sum - 1)
	}
	useEffect(() => {
		function changeElement() {
			const newOb = {
				...BasketDB.filter((e, i) => i === amountIndex.index)[0],
				amount: amountIndex.sum - 1,
				price: test(amountIndex.sum, BasketDB[amountIndex.index].price),
			}
			dispatch(
				setBasketDB(
					BasketDB.map((e, i) => (i === amountIndex.index ? newOb : e))
				)
			)
		}
		changeElement()
	}, [amountIndex])

	const deletElements = (index: number) => {
		dispatch(setBasketDB(BasketDB.filter((e, i) => i !== index)))
	}
	return (
		<ul className='basket-items'>
			{BasketDB.map((e, i) => (
				<li key={i} className='basket-items__item'>
					<div className='basket-items__left'>
						<img width={103} height={112} src={e.image[0]} alt='product' />
						<div className='basket-items__desc'>
							<h5 className='basket-items__name'>{e.name}</h5>
							<div className='basket-items__tags'>
								<span className='basket-items__status'></span>
								<p className='basket-items__tag'>Середній</p>
								<p className='basket-items__tag'>М'ята</p>
							</div>
						</div>
					</div>
					<CalkulatorBasket
						index={i}
						setAmountIndex={setAmountIndex}
						type={amountIndex.type}
						amountMassive={e.amount}
					/>
					<Cashback num={e.cashback} />
					<h4 className='basket-items__price'>{e.price}$</h4>
					<button
						className='basket-items__btn'
						onClick={() => deletElements(i)}
					>
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M13 17V11C13 10.7348 13.1054 10.4804 13.2929 10.2929C13.4804 10.1054 13.7348 10 14 10C14.2652 10 14.5196 10.1054 14.7071 10.2929C14.8946 10.4804 15 10.7348 15 11V17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18C13.7348 18 13.4804 17.8946 13.2929 17.7071C13.1054 17.5196 13 17.2652 13 17ZM10 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18ZM21 7C21 7.26522 20.8946 7.51957 20.7071 7.70711C20.5196 7.89464 20.2652 8 20 8H19V18.94C19 19.7356 18.6839 20.4987 18.1213 21.0613C17.5587 21.6239 16.7956 21.94 16 21.94H8C7.20435 21.94 6.44129 21.6239 5.87868 21.0613C5.31607 20.4987 5 19.7356 5 18.94V8H4C3.73478 8 3.48043 7.89464 3.29289 7.70711C3.10536 7.51957 3 7.26522 3 7C3 6.73478 3.10536 6.48043 3.29289 6.29289C3.48043 6.10536 3.73478 6 4 6H8V5C8 4.20435 8.31607 3.44129 8.87868 2.87868C9.44129 2.31607 10.2044 2 11 2H13C13.7956 2 14.5587 2.31607 15.1213 2.87868C15.6839 3.44129 16 4.20435 16 5V6H20C20.2652 6 20.5196 6.10536 20.7071 6.29289C20.8946 6.48043 21 6.73478 21 7ZM10 6H14V5C14 4.73478 13.8946 4.48043 13.7071 4.29289C13.5196 4.10536 13.2652 4 13 4H11C10.7348 4 10.4804 4.10536 10.2929 4.29289C10.1054 4.48043 10 4.73478 10 5V6ZM17 8H7V18.94C7 19.2052 7.10536 19.4596 7.29289 19.6471C7.48043 19.8346 7.73478 19.94 8 19.94H16C16.2652 19.94 16.5196 19.8346 16.7071 19.6471C16.8946 19.4596 17 19.2052 17 18.94V8Z'
								fill='#CBCBCB'
							/>
						</svg>
					</button>
				</li>
			))}
		</ul>
	)
}

export default BasketItems
