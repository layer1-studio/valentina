import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'
import './App.css'

import CartDrawer from './components/CartDrawer'
import SearchOverlay from './components/SearchOverlay'
import WishlistOverlay from './components/WishlistOverlay'
import ProductDetailModal from './components/ProductDetailModal'
import OrderDetailModal from './components/OrderDetailModal'

import Account from './pages/Account'
import Support from './pages/Support'
import Contact from './pages/Contact'

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <CartDrawer />
            <SearchOverlay />
            <WishlistOverlay />
            <ProductDetailModal />
            <OrderDetailModal />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/account" element={<Account />} />
                <Route path="/support" element={<Support />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default App
