import './bueDesc.Module.scss'
import CartItems from '../Products/CartItems'
import Kit from '../Kit'
import CartDB from '../../services/cartItemsDB.json'
const BueDesc = () => {
	return (
		<section className='bue-desc'>
			<ul className='bue-desc__creator'>
				<li className='bue-desc__creator-item'>
					Артикул: <span>324941654</span>
				</li>
				<li className='bue-desc__creator-item'>
					Виробник: <span>OVNS</span>
				</li>
			</ul>
			<p className='bue-desc__text bue-desc__text_border'>
				В W01, як зарядний пристрій використовує класичний кабель micro-USB,
				позбавляючи від необхідності носити з собою зарядний пристрій.{'\n'}
				{'\n'}
				{'\n'}
				Зовнішній вигляд - строгі лінії, компактні габарити і максимально
				лаконічний дизайн без яскравих гравіювань. Корпус батареї виготовлений з
				приємного на дотик пластика. По центру блоку розташований невеликий
				світлодіодний індикатор, який горить трьома різними кольорами в
				залежності від заряду акумулятора (зелений - повний заряд, синій -
				середній заряд і червоний - низький заряд). Картридж перезаправлятися,
				має обсяг 0.7 мл і опір 1.8 Ом. По центру блоку розташований невеликий
				світлодіодний індикатор, який горить трьома різними кольорами в
				залежності від заряду акумулятора (зелений - повний заряд, синій -
				середній заряд і червоний - низький заряд). Картридж перезаправлятися,
				має обсяг 0.7 мл і опір 1.8 Ом.
			</p>
			<img
				src='../../img/bue-page/banner.jpg'
				style={{ objectFit: 'cover' }}
				height={418}
				width={1110}
				alt='bue-banner'
				className='bue-desc__banner'
			/>
			<div className='bue-desc__item'>
				<p className='bue-desc__text'>
					В W01, як зарядний пристрій використовує класичний кабель micro-USB,
					позбавляючи від необхідності носити з собою зарядний пристрій.{'\n'}
					{'\n'}
					{'\n'}
					Зовнішній вигляд - строгі лінії, компактні габарити і максимально
					лаконічний дизайн без яскравих гравіювань. Корпус батареї виготовлений
					з приємного на дотик пластика. По центру блоку розташований невеликий
					світлодіодний індикатор, який горить трьома різними кольорами в
					залежності від заряду акумулятора (зелений - повний заряд, синій -
					середній заряд і червоний - низький заряд). Картридж перезаправлятися,
					має обсяг 0.7 мл і опір 1.8 Ом. По центру блоку розташований невеликий
					світлодіодний індикатор, який горить трьома різними кольорами в
					залежності від заряду акумулятора (зелений - повний заряд, синій -
					середній заряд і червоний - низький заряд). Картридж перезаправлятися,
					має обсяг 0.7 мл і опір 1.8 Ом.
				</p>
				<img
					width={540}
					height={310}
					src='./img/bue-page/1.jpg'
					alt='bue-desc'
					className='bue-desc__img'
				/>
			</div>
			<div className='bue-desc__item'>
				<img
					width={540}
					height={310}
					src='./img/bue-page/2.jpg'
					alt='bue-desc'
					className='bue-desc__img'
				/>
				<p className='bue-desc__text'>
					В W01, як зарядний пристрій використовує класичний кабель micro-USB,
					позбавляючи від необхідності носити з собою зарядний пристрій.{'\n'}
					{'\n'}
					{'\n'}
					Зовнішній вигляд - строгі лінії, компактні габарити і максимально
					лаконічний дизайн без яскравих гравіювань. Корпус батареї виготовлений
					з приємного на дотик пластика. По центру блоку розташований невеликий
					світлодіодний індикатор, який горить трьома різними кольорами в
					залежності від заряду акумулятора (зелений - повний заряд, синій -
					середній заряд і червоний - низький заряд). Картридж перезаправлятися,
					має обсяг 0.7 мл і опір 1.8 Ом. По центру блоку розташований невеликий
					світлодіодний індикатор, який горить трьома різними кольорами в
					залежності від заряду акумулятора (зелений - повний заряд, синій -
					середній заряд і червоний - низький заряд). Картридж перезаправлятися,
					має обсяг 0.7 мл і опір 1.8 Ом.
				</p>
			</div>
			<p className='bue-desc__text bue-desc__text_margin'>
				В W01, як зарядний пристрій використовує класичний кабель micro-USB,
				позбавляючи від необхідності носити з собою зарядний пристрій.{'\n'}
				{'\n'}
				{'\n'}
				Зовнішній вигляд - строгі лінії, компактні габарити і максимально
				лаконічний дизайн без яскравих гравіювань. Корпус батареї виготовлений з
				приємного на дотик пластика. По центру блоку розташований невеликий
				світлодіодний індикатор, який горить трьома різними кольорами в
				залежності від заряду акумулятора (зелений - повний заряд, синій -
				середній заряд і червоний - низький заряд). Картридж перезаправлятися,
				має обсяг 0.7 мл і опір 1.8 Ом. По центру блоку розташований невеликий
				світлодіодний індикатор, який горить трьома різними кольорами в
				залежності від заряду акумулятора (зелений - повний заряд, синій -
				середній заряд і червоний - низький заряд). Картридж перезаправлятися,
				має обсяг 0.7 мл і опір 1.8 Ом.
			</p>
			<div className='bue-desc__kit'>
				<Kit />
			</div>
			<div className='bue-desc__recomnd'>
				<CartItems item={CartDB} title={'Вас можуть зацікавити'} />
			</div>
		</section>
	)
}

export default BueDesc