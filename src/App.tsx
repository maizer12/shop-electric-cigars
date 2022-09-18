import React from 'react'
import Footer from './component/footer'
import Header from './component/header'
import Navigation from './component/navigation'
import Pagination from './component/pagination'
import Bue from './pages/Bue'
import Home from './pages/Home'
import './style/null.scss'
import {Route, Routes} from 'react-router-dom'
import Basket from './pages/Basket'
import Catalog from './pages/Сatalog'
import Checkout from './pages/Checkout'
function App() {
	return (
		<main className='main'>
			<Header />
			<Navigation />
			<Pagination />
			{
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/bue' element={<Bue />} />
					<Route path='/basket' element={<Basket />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/checkout' element={<Checkout />} />
				</Routes>
			}
			<Footer />
		</main>
	)
}

export default App
