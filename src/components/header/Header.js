import React from 'react';
import {useSelector} from "react-redux";

export const Header = (props) => {
    const {cart, wishlist} = useSelector(({cart:{cart}, wishlist:{wishlist}}) =>
        ({
            cart,
            wishlist
        }));
    return (
        <header className = 'd-flex justify-between align'>
            <h2>Hello in shop</h2>
            <div className = 'd-flex justify-between'>
            <div className='mx-10'>Wishlist: {wishlist.length}</div>
            <div className='mx-10'>Cart: {cart.length}</div>
        </div>
        </header>
    )
}