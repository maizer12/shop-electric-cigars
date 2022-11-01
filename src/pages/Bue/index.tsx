import React, { useState } from 'react'
import Breadcrumbs from '../../component/breadcrumbs'
import BueBoxContent from '../../component/bueBox/bueBoxContent'
import BueBoxImage from '../../component/bueBox/bueBoxImage'
import BueCompatible from '../../component/bueCompatible'
import BueDelivery from '../../component/bueDelivery'
import BueDesc from '../../component/bueDesc'
import BueReviews from '../../component/bueReviews'
import BestReviews from '../../component/bueReviews/bestReviews'
import BuePagination from '../../component/pagination/buePagination'
import PopupBue from '../../component/popup/popupBue'
import './bue.Module.scss'
const Bue = () => {
    const [popupSwitch, setPopupSwitch] = useState<boolean>(false);
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
			<Breadcrumbs breadcrumbs={breadcrumbs}/>
			<h2 className='bue__title'>
				Cтартовий набiр OVNS W01 POD KIT (original)
			</h2>
			<section className='bue-box'>
				<BueBoxImage />
				<BueBoxContent setPopupSwitch={setPopupSwitch} />
			</section>
			<BuePagination setNumber={setNum} />
            {popupSwitch? <PopupBue setPopupSwitch={setPopupSwitch}/>:'' }
			{pagination[num]}
		</main>
	)
}

export default Bue
