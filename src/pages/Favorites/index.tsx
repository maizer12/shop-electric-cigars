import Breadcrumbs from '../../component/breadcrumbs'
import FavoritesItem from '../../component/favoritesItem'
import './favorites.Module.scss'

const Favorites = () => {
	const breadcrumbs = ['Головна', 'Обране']
	return (
		<main className='favorites'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<ul className="favorites__items">
				<FavoritesItem/>
				<FavoritesItem/>
				<FavoritesItem/>
			</ul>
		</main>
	)
}

export default Favorites
