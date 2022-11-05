import React, { useMemo, useState } from 'react'
import Cart from '../../cart'
import PaginationCards from '../../pagination/paginationCards'
import './cartItemsCatalog.Module.scss'
import ICart from '../../../model/ICart'

interface IProps {
	items: ICart[]
	rowActivity: boolean
	sumCarts: string
	filterItems: string
}
type ISortNumber = {
	a: number
	b: number
}
const CartItemsCatalog = ({
	items,
	rowActivity,
	sumCarts,
	filterItems,
}: IProps) => {
	const cartsSortDB = [...items]
	const [sortPrice, setSortPrice] = useState<ISortNumber>({ a: 0, b: 0 })
	const cartSort = cartsSortDB.sort(function (a, b) {
		if (a.price > b.price) {
			return sortPrice.a
		}
		if (a.price < b.price) {
			return sortPrice.b
		}
		return 0
	})
	const [cartsDB, setCartsDB] = useState(items)
	useMemo(() => {
		if (filterItems === '2') {
			setSortPrice({ a: 1, b: -1 })
		} else if (filterItems === '3') {
			setSortPrice({ a: -1, b: 1 })
		} else if (filterItems === '1') {
			setCartsDB(items)
		}
	}, [filterItems])
	useMemo(() => {
		if (filterItems === '1') {
			setCartsDB(items)
		} else {
			setCartsDB(cartSort)
		}
	}, [sortPrice])
	const sumCart: number = items.length
	const [sumPagination, setSumPagination] = useState<number>(0)
	return (
		<section className='carts-catalog'>
			<div
				style={{ gridTemplateColumns: rowActivity ? '1fr 1fr 1fr' : '1fr' }}
				className='carts-catalog__item'
			>
				{cartsDB.map((e, i) =>
					i <= Number(sumCarts) && i > sumPagination ? (
						<Cart key={i} indx={i} open={55} cartElement={e} />
					) : (
						''
					)
				)}
			</div>
			<PaginationCards
				setSumPagination={setSumPagination}
				sumElementNow={Number(sumCarts)}
				sumCart={sumCart}
			/>
		</section>
	)
}

export default CartItemsCatalog
