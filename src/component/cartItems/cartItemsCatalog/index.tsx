import React, { useState } from 'react'
import Cart from '../../cart'
import PaginationCards from '../../pagination/paginationCards'
import './cartItemsCatalog.Module.scss'
import ICart from '../../../model/ICart'

interface IProps {
	items: ICart[],
    rowActivity: boolean,
    sumCarts:string
}

const CartItemsCatalog = ({ items, rowActivity, sumCarts }: IProps) => {
    const cartsDB = items.sort((a, b) => a.price )
	const sumCart:number = items.length
    const [sumPagination, setSumPagination] = useState<number>(0)
	return (
		<section className='carts-catalog'>
			<div style={{gridTemplateColumns: rowActivity? '1fr 1fr 1fr': '1fr'}} className='carts-catalog__item'>
				{cartsDB.map((e, i) => (
                    i <= Number(sumCarts)&& i > sumPagination?
					<Cart
						key={i}
						indx={i}
						open={55}
                        cartElement={e}
					/>:''
				))}
			</div>
			<PaginationCards setSumPagination={setSumPagination} sumElementNow={Number(sumCarts)} sumCart={sumCart} />
		</section>
	)
}

export default CartItemsCatalog
