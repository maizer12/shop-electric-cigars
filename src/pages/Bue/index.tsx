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
import './bue.Module.scss'
const Bue = () => {
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
			<Breadcrumbs />
			<h2 className='bue__title'>
				Cтартовий набiр OVNS W01 POD KIT (original)
			</h2>
			<section className='bue-box'>
				<BueBoxImage />
				<BueBoxContent />
			</section>
			<BuePagination setNumber={setNum} />
			{pagination[num]}
		</main>
	)
}

export default Bue
