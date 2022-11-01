import React from 'react';
import Breadcrumbs from '../../component/breadcrumbs';
import CheckoutForm from '../../component/checkoutForm';
import YourOrder from '../../component/yourOrder';
import './checkout.Module.scss'
const Checkout = () => {
    const breadcrumbs = [
		'Головна',
		'Електронні сигарети',
		'Стартові набори',
		'Стартовий набор OVNS W01 POD KIT (ORIGINAL)',
	]
    return (
        <main className='checkout'>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <h2 className='checkout__title'>Оформлення замовлення</h2>
            <div className="checkout__items">
                <CheckoutForm />
                <YourOrder />
            </div>
        </main>
    )
};

export default Checkout;