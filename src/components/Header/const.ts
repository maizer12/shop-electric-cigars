import ILink from '../../types/ILink'

export const headerMenu: ILink[] = [
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
export const navigationLinks: ILink[] = [
	{ name: 'Каталог товарів', path: '/' },
	{ name: 'Акції', path: '/catalog' },
	{ name: 'Популярне ', path: '/catalog' },
	{ name: 'Рod системи', path: '/catalog' },
	{ name: 'Одноразові', path: '/catalog' },
	{ name: 'Рідини ', path: '/catalog' },
	{ name: 'Блог', path: '/blog' },
]
