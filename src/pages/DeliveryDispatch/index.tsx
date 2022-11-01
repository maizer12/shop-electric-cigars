import React, { useState } from 'react';
import Breadcrumbs from '../../component/breadcrumbs';
import './DeliveryDispatch.Module.scss';
import {deliveryDesc} from './deliveryDesc'

const DeliveryDispatch = () => {
    const breadcrumbs = [
		'Головна',
		'Електронні сигарети',
		'Стартові набори',
		'Стартовий набор OVNS W01 POD KIT (ORIGINAL)',
	]
    const paginationItem:string[] = ['Доставка', 'Оплата', 'Повернення товару', 'Умови']
    const [activePagination, setActivePagination] = useState<number>(0)
    return (
        <main className='delivery-dispatch'>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
            <h2 className="delivery-dispatch__title">Доставка і оплата</h2>
            <section className="delivery-dispatch__content">
                <ul className="delivery-dispatch-pagination">
                    {paginationItem.map((e, i) => <li key={e} onClick={()=> setActivePagination(i)} className={`delivery-dispatch-pagination__item ${activePagination === i? 'pagination-active': '' }`}>{e}</li>)}
                </ul>
                <ul className="delivery-dispatch-text">
                    {deliveryDesc.map((item) =>  
                        <li className="delivery-dispatch-text__item">
                            <h2 className="delivery-dispatch-text__title">{item.title}</h2>
                            <p className="delivery-dispatch-text__desc">{item.desc}</p>
                        </li>)
                    }
                </ul>
            </section>
        </main>
    );
};

export default DeliveryDispatch;