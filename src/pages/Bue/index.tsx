import React, { useState } from 'react'
import Breadcrumbs from '../../components/breadcrumbs'
import BueBoxContent from '../../components/bueBox/bueBoxContent'
import BueBoxImage from '../../components/bueBox/bueBoxImage'
import BueCompatible from '../../components/bueCompatible'
import BueDelivery from '../../components/bueDelivery'
import BueDesc from '../../components/bueDesc'
import BueReviews from '../../components/bueReviews'
import BestReviews from '../../components/bueReviews/bestReviews'
import BuePagination from '../../components/pagination/buePagination'
import PopupBue from '../../components/popup/popupBue'
import './bue.Module.scss'
const Bue = () => {
	const [popupSwitch, setPopupSwitch] = useState<boolean>(false)
	const breadcrumbs = [
		'Головна',
		'Електронні сигарети',
		'Стартові набори',
		'Стартовий набор OVNS W01 POD KIT (ORIGINAL)',
	]
	const pagination: JSX.Element[] = [
		<BueDesc />,
		<BueCompatible />,
		<BueReviews />,
		<BestReviews />,
		<BueDelivery />,
	]
	const [num, setNum] = useState<number>(0)
	return (
		<main className='bue'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<h2 className='bue__title'>
				Cтартовий набiр OVNS W01 POD KIT (original)
			</h2>
			<section className='bue-box'>
				<BueBoxImage />
				<BueBoxContent setPopupSwitch={setPopupSwitch} />
			</section>
			<BuePagination setNumber={setNum} />
			{popupSwitch ? <PopupBue setPopupSwitch={setPopupSwitch} /> : ''}
			{pagination[num]}
		</main>
	)
}

export default Bue
