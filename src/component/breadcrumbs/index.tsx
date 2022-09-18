import { link } from 'fs';
import React from 'react';
import './breadcrumbs.Module.scss'

const Breadcrumbs = () => {
	const items: string[] = [
		'Головна',
		'Електронні сигарети',
		'Стартові набори',
		'Стартовий набор OVNS W01 POD KIT (ORIGINAL)',
	]
	return (
		<section className='breadcrumbs'>
			{items.map((e, i) => (
				<li key={e} className='breadcrumbs__item'>{e}</li>
			))}
		</section>
	)
};

export default Breadcrumbs;