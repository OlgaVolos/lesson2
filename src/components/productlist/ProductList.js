import React from 'react';
import {ProductItem} from "../productitem";
import {useSelector, useDispatch} from "react-redux";
import {toggleItemInWishlist,
    toggleItemInCart} from '../../redux'
export const ProductList = ({products}) => {
   const dispatch = useDispatch()
    const wishlist = useSelector(({wishlist: {wishlist}}) => wishlist);
   const cart = useSelector(({cart: {cart}}) => cart);

    const onAddToWishlist= (product) => {
       dispatch(toggleItemInWishlist(product));

   };
   const onAddToCart = (product) => {
       dispatch(toggleItemInCart(product));
   };


    return (
        <div>
            {products.map((product) => (
                <ProductItem
                    isAddedToCart = {!!cart.find(({id}) => id===product.id)}
                    isAddedToWishlist = {!!wishlist.find(({id}) => id===product.id)}
                    onAddToWishlist={onAddToWishlist}
                    onAddToCart={onAddToCart}
                    key={product.id} product={product}/>

            ))};
        </div>
    );
};