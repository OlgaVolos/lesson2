import React from 'react';
import {ProductItem} from "../productitem";
import {useSelector, useDispatch} from "react-redux";
import {toggleItemInWishlist,
    toggleItemInCart} from '../../redux'
export const ProductList = ({products}) => {
   const dispatch = useDispatch()
    const wishlist = useSelector(({wishlist: {wishlist}}) => wishlist)

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
                    isAddedToWishlist = {wishlist.find(({id}) => id===product.id)}
                    onAddToWishlist={onAddToWishlist}
                    onAddToCart={onAddToCart}
                    key={product.id} product={product}/>

            ))};
        </div>
    );
};