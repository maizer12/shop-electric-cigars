import Breadcrumbs from '../../component/breadcrumbs'
import FavoritesItem from '../../component/favoritesItem'
import { AppSelector } from '../../redux/hook'
import './favorites.Module.scss'

const Favorites = () => {
	const FavoritesDB = AppSelector(state => state.favoriteSlice.favoritesDB)
	console.log(FavoritesDB)
	const breadcrumbs = ['Головна', 'Обране']
	return (
		<main className='favorites'>
			<Breadcrumbs breadcrumbs={breadcrumbs} />
			<ul className='favorites__items'>
				{FavoritesDB.map((e, i) => (
					<FavoritesItem index={i} key={i} elementCart={e} />
				))}
			</ul>
		</main>
	)
}

export default Favorites
