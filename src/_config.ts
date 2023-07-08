import logoFooter from './assets/img/logo-footer.svg'
import logoMain from './assets/img/logo.svg'
import btnOne from './assets/img/btn/1.svg'
type ILogo = {
	footer: string
	header: string
}

export const logo: ILogo = {
	footer: logoFooter,
	header: logoMain,
}

type INavigationButtons = {
	url: string
	name: string
	path: string
	sum: number
}
export const navigationButtons: INavigationButtons[] = [
	{
		url: btnOne,
		name: 'Обране',
		path: '/favorites',
		sum: 0,
	},
	{ url: './assets/images/btn/2.svg', name: 'Порівняння', path: '', sum: 0 },
	{
		url: './assets/images/btn/3.svg',
		name: 'Корзина',
		path: '/basket',
		sum: 0,
	},
]
