import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom"
export const ProductCard = () => {
    return (
        <div className='col-2'>
            <Link className='product-card position-relative' to=''>
                <div className='wishlist-icon position-absolute'>
                    <Link>
                        <img src='images/wish.svg' alt='wish'></img>
                    </Link>
                </div>
                <div className='product-image'>
                    <img src="images/watch.jpg" className='img-fluid' alt='product image'></img>
                    <img src="images/acc.avif" className='img-fluid' alt='product image'></img>
                </div>
                <div className='product-details'>
                    <h6 className='brand'>Rolex</h6>
                    <h5 className='product-title'>
                        My Apprentice: Game Over Again!
                    </h5>
                    <ReactStars
                        count={5}

                        size={24}
                        value="3.8"
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className='price'>$100.00</p>
                </div>
                <div className='action-bar position-absolute'>

                    <div className='d-flex flex-column gap-15'>
                        <Link>
                            <img src='images/prodcompare.svg' alt='prodcomapre'></img>
                        </Link>
                        <Link>
                            <img src='images/view.svg' alt='view'></img>
                        </Link>
                        <Link>
                            <img src='images/add-cart.svg' alt='add card'></img>
                        </Link>

                    </div>
                </div>
            </Link>

        </div>
    )
}
