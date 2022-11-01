import React, { useState } from 'react'
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
import Blog from './pages/Blog'
import PopupRegistrationLogin from './component/popup/popupRegistrationLogin'
import DeliveryDispatch from './pages/DeliveryDispatch'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
function App() {
    const [registrationOpen, setRegistrationOpen] = useState(false);
	return (
		<main className='main'>
			<Header setRegistrationOpen={setRegistrationOpen} />
			<Navigation />
			<Pagination />
			{
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/bue' element={<Bue />} />
					<Route path='/basket' element={<Basket />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/blog' element={<Blog/>} />
					<Route path='/delivery-dispatch' element={<DeliveryDispatch/>} />
					<Route path='/faq' element={<Faq/>} />
					<Route path='/contact' element={<Contact/>} />
				</Routes>
			}
            {registrationOpen?<PopupRegistrationLogin setRegistrationOpen={setRegistrationOpen} />:''}
			<Footer />
		</main>
	)
}

export default App
