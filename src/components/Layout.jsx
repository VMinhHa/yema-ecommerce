import React, { useEffect } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './Header'
import Footer from './Footer'
import ProductViewModal from './ProductViewModal'

import Routes from '../routes/Routes'
import ScrollButton from './ScrollButton'


const Layout = () => {

  return (
	<AnimatePresence wait>
		<BrowserRouter>
			<Header />
			<div className='container'>
				<div className='main'>
					<Routes />
				</div>
			</div>
			<Footer />
			<ProductViewModal />
			<ScrollButton/>
		</BrowserRouter>
	</AnimatePresence>
  )
}

export default Layout