import React from 'react';
import CheckoutFormInput from '../UI/input/checkoutFormInput';
import './checkoutForm.Module.scss'
const CheckoutForm = () => {
	return (
		<section className='checkout-form'>
			<h4 className='checkout-form__name'>Спосіб оплати: *</h4>
			<select name='' id='' className='checkout-form__select'>
				<option value='' className='checkout-form__option'>
					Оберіть способ оплати
				</option>
			</select>
			<h4 className='checkout-form__name'>Спосіб оплати: *</h4>
			<select name='' id='' className='checkout-form__select'>
				<option value='' className='checkout-form__option'>
					Оберіть способ оплати
				</option>
			</select>
			<select name='' id='' className='checkout-form__select'>
				<option value='' className='checkout-form__option'>
					Оберіть способ оплати
				</option>
			</select>
			<select name='' id='' className='checkout-form__select'>
				<option value='' className='checkout-form__option'>
					Оберіть способ оплати
				</option>
			</select>
			<CheckoutFormInput name="Впишіть ім'я *" placeholder='Іван' />
			<CheckoutFormInput name='Впишіть прізвище *' placeholder='Івнов' />
			<CheckoutFormInput name='Номер телефону *' placeholder='+38099999999' />
			<CheckoutFormInput name='Email' placeholder='sobaka@fjk.com' />
			<label htmlFor='' className='checkout-form__label'>
				<input type='checkbox' className='checkout-form__checkbox' />
				<p className='checkout-form__desc'>Впишіть ім'я *</p>
			</label>
			<p className='checkout-form__desc'>Впишіть ім'я *</p>
			<textarea className='checkout-form__textarea'></textarea>
		</section>
	)
};

export default CheckoutForm;