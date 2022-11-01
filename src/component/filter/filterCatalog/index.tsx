import React from 'react';
import CheckboxFilter from '../../UI/checkbox/checkboxFilter';
import RangeInput from '../../UI/input/rangeInput';
import './filterCatalog.Module.scss'
const FilterCatalog = () => {
    const checkbox = ['Checkbox', 'Checkbox', 'Checkbox', 'Checkbox']
	return (
		<section className='filter-catalog'>
			<div className='filter-catalog__colum'>
				<h4 className='filter-catalog__title'>Ціна</h4>
				<RangeInput />
			</div>
			<div className='filter-catalog__colum'>
				<h4 className='filter-catalog__title'>Виробник</h4>
				<CheckboxFilter numberCheckbox='1' checkbox={checkbox}/>
			</div>
			<div className='filter-catalog__colum'>
				<h4 className='filter-catalog__title'>Назва параметру</h4>
				<CheckboxFilter numberCheckbox='2' checkbox={checkbox}/>
			</div>
		</section>
	)
};

export default FilterCatalog;