import { useState } from 'react'
import { navigationButtons } from '../../../_config'
import BtnHeader from '../../UI/Buttons/BtnHeader'

const HeaderButtons = () => {
	const [activePagination, setActivePagination] = useState<number>(100)
	console.log(activePagination)
	return (
		<div className='header-buttons'>
			{navigationButtons.map((e, i) => (
				<BtnHeader
					key={e.name}
					{...e}
					i={i}
					activePagination={activePagination}
					setActivePagination={setActivePagination}
				/>
			))}
		</div>
	)
}

export default HeaderButtons
