import React from 'react'

export const ProductItem = ({
                                isAddedToCart,
                                isAddedToWishlist,
                                onAddToWishlist,
                                onAddToCart,
                                product,
                                product: {id, title, price, description}
                            }) => {
    return (
        <div>
            <h5>{id}</h5>
            <h5>{title}</h5>
            <h5>{price}</h5>
            <h5>{description}</h5>
            <button
                style={{background : isAddedToWishlist ? 'red' : 'green'}}
                onClick={() => onAddToWishlist(product)}>{isAddedToWishlist ? 'remove from wishlist' : 'add to wishlist'} </button>
            <button style={{background : isAddedToCart ? 'red' : 'green'}} onClick={()=> onAddToCart(product)}>Add to cart</button>
            <hr/>
        </div>
    )
}