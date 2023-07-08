type IHeaderMenu = {
	name: string
	path: string
}
export const headerMenu: IHeaderMenu[] = [
	{ name: 'Доставка и оплата', path: '/delivery-dispatch' },
	{ name: 'Контакти', path: '#' },
	{ name: 'FAQ', path: '/faq' },
]

type IHeaderButtons = {
	url: string
	name: string
	path: string
	sum: number
}
export const headerButtons: IHeaderButtons[] = [
	{
		url: './img/btn/1.svg',
		name: 'Обране',
		path: '/favorites',
		sum: 0,
	},
	{ url: './img/btn/2.svg', name: 'Порівняння', path: '', sum: 0 },
	{
		url: './img/btn/3.svg',
		name: 'Корзина',
		path: '/basket',
		sum: 0,
	},
]
