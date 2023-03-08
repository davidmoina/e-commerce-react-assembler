import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import NotFound from '../pages/NotFound/NotFound'
import CartPage from '../pages/CartPage/CartPage';
import Header from '../containers/HeaderContainer/Header';
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage';

const Routing = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/products" element={<Products/>} />
                <Route path='/cart' element={<CartPage/>}/>
                <Route path="/detail/:productId" element={<ProductDetailPage/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;