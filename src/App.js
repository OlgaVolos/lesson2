import React, {useEffect, useState, useCallback} from 'react'

import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {Header} from "./components/header";
import {ProductList} from "./components/productlist";
import {useServices} from "./services";
import {setProducts} from "./redux";

function App() {

    const {cart, wishlist, products} = useSelector(({cart: {cart}, wishlist: {wishlist}, products: {products} }) => ({cart,
    wishlist,
    products}));

    const dispatch = useDispatch()

// const {productService} = useServices();



useEffect(() => {
    // fetchData();
    dispatch(setProducts())
}, [dispatch])
    return (
        <div className='App'>
            {products.length}
            <Header />
            <ProductList products={products} />
            {/*<h1>Hello {cart.length} {wishlist.length}</h1>*/}

        </div>
    );
}

export default App;
