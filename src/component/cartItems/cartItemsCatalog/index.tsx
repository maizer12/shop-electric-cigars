import React from 'react'
import Cart from '../../cart'
import PaginationCards from '../../pagination/paginationCards'
import './cartItemsCatalog.Module.scss'

interface IItem {
	image: string
	name: string
	price: number
	sale: number
	type: string
}
interface IProps {
	items: IItem[]
}

const CartItemsCatalog = ({ items }: IProps) => {
	const sumCart:number = items.length
	const workPagination = (a:number) => {
		if(a === 0){
			return 12
		}else if (a === 1){
			return a
		}
	}
	console.log(workPagination(1))
	return (
		<section className='carts-catalog'>
			<div className='carts-catalog__item'>
				{items.map((e, i) => (
					<Cart
						key={i}
						indx={i}
						open={55}
						type={e.type}
						name={e.name}
						image={e.image}
						price={e.price}
						sale={e.sale}
					/>
				))}
			</div>
			<PaginationCards sumCart={sumCart} />
		</section>
	)
}

export default CartItemsCatalog
