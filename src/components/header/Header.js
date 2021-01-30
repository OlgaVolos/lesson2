import React, {useMemo}from 'react';
import {useSelector} from "react-redux";

export const Header = (props) => {
    const {cart, wishlist} = useSelector(({cart:{cart}, wishlist:{wishlist}}) =>
        ({
            cart,
            wishlist
        }));



    const totalPriceCart = useMemo(() => {
        return cart.reduce((acc, el)=> (acc+el.price), 0);
    }, [cart]);

    const totalPriceWishlist = useMemo(() => {
        return wishlist.reduce((acc, el)=> (acc+el.price), 0);
    }, [wishlist])


    return (
        <header className = 'd-flex justify-between align'>
            <h2>Hello in shop</h2>
            <div className = 'd-flex justify-between'>
            <div className='mx-10' title={totalPriceWishlist}>Wishlist: {wishlist.length}</div>
            <div className='mx-10' title={totalPriceCart}>Cart: {cart.length}</div>
        </div>
        </header>
    )
}