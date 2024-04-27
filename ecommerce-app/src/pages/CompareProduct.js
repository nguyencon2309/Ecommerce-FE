import React from 'react'
import { BreadCrumb } from '../components/BreadCrumb'
import Meta from '../components/Meta'
import { Color } from '../components/Color'



const CompareProduct = () => {
    return (
        <>
            <Meta title='Compare Product' />
            <BreadCrumb title="Compare Product" />
            <div className='compare-product-wrapper py-3 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'/>
                                <div className='product-card-images'>
                                    <img src='images/watch.jpg' alt='watch'
                                    className='img-fluid'/>
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>
                                    iPhone 15 Pro Max 256GB | Chính hãng VN/A
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$1000</h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Hovels</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'/>
                                <div className='product-card-images'>
                                    <img src='images/watch.jpg' alt='watch'
                                    className='img-fluid'/>
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>
                                    iPhone 15 Pro Max 256GB | Chính hãng VN/A
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$1000</h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Hovels</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <div className='compare-product-card position-relative'>
                                <img src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'/>
                                <div className='product-card-images'>
                                    <img src='images/watch.jpg' alt='watch'
                                    className='img-fluid'/>
                                </div>
                                <div className='compare-product-details'>
                                    <h5 className='title'>
                                    iPhone 15 Pro Max 256GB | Chính hãng VN/A
                                    </h5>
                                    <h6 className='price mb-3 mt-3'>$1000</h6>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Brand:</h5>
                                            <p>Hovels</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Type:</h5>
                                            <p>Watch</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Availability:</h5>
                                            <p>In Stock</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Color:</h5>
                                            <Color/>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='product-detail'>
                                            <h5>Size:</h5>
                                            <div className='d-flex gap-10'>
                                                <p>S</p>
                                                <p>M</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompareProduct