import React from 'react';
import Breadcrumbs from '../../component/breadcrumbs';
import CheckoutForm from '../../component/checkoutForm';
import './checkout.Module.scss'
const Checkout = () => {
	return (
		<main className='checkout'>
			<Breadcrumbs />
			<h2 className='checkout__title'>Оформлення замовлення</h2>
			<CheckoutForm/>
		</main>
	)
};

export default Checkout;