import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom"
export const SpecialProduct = () => {
    return (
        <div className='col-4'>
            <div className='special-product-card'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <img src="images/watch.jpg" alt='img' className='img-fluid'></img>
                    </div>
                    <div className='special-product-content'>
                        <h5 className='brand'>Samsung</h5>
                        <h6 className='title'>Samsung Galaxy Note 10</h6>
                        <ReactStars
                            count={5}

                            size={24}
                            value={3.8}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className='price'>
                            <span className='color-red'>$100</span>
                            &nbsp;
                            <strike >$200</strike>
                        </p>
                        <div className='discount-till d-flex align-items-center gap-10'>
                            <p className='mb-0'>
                                <b>5</b>days
                            </p>

                            <span className='badge rounded-circle p-3 '>1</span>:
                            <span className='badge rounded-circle p-3 '>1</span>:
                            <span className='badge rounded-circle p-3 '>1</span>

                        </div>
                        <div className='prod-count my-2'>
                            <p>Products : 5</p>
                            <div className="progress ">
                                <div className="progress-bar" role="progressbar" style={{"width":"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <Link className='button'>Add To Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
