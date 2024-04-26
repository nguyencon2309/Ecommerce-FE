import React from 'react'
import { BreadCrumb } from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';

export const OurStore = () => {
    const [gird, setGird] = useState(3);
    
    return (
        <>
            <Meta title='Our Store' />
            <BreadCrumb title="Our Store" />
            <div className='store-wrapper home-wrapper-2 py-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Shop by Categories</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li>Watch</li>
                                        <li>Laptop</li>
                                        <li>Camera</li>
                                        <li>TV</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Filter by</h3>
                                <div>
                                    <h3 className='sub-title'>Availability</h3>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="" />
                                            <label
                                                className="form-check-label"
                                                htmlFor="">
                                                In Stock (1)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id=""
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="">
                                                Out a Stock
                                            </label>
                                        </div>
                                    </div>
                                    <h3 className='sub-title'>Price</h3>
                                    <div className='d-flex gap-10 align-items-center'>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput" placeholder="" />
                                            <label htmlFor="floatingInput">From</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control" id="floatingInput1" placeholder="" />
                                            <label htmlFor="floatingInput1">To</label>
                                        </div>
                                    </div>
                                    <h3 className='sub-title'>Color</h3>
                                    <div >
                                        <ul className='colors ps-0'>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>
                                    </div>
                                    <h3 className='sub-title'>Size</h3>
                                    <div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="size-1" />
                                            <label
                                                className="form-check-label"
                                                htmlFor="size-1">
                                                S(2)
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="size-2" />
                                            <label
                                                className="form-check-label"
                                                htmlFor="size-2">
                                                M(5)
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='filter-card mb-3'>
                                <h3 className='filter-title'>Product Tags</h3>
                                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Headphone
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Laptop
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Mobile
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Micro
                                    </span>

                                </div>
                            </div>
                            <div className='filter-card'>
                                <h3 className='filter-title'>Random Product</h3>
                                <div className='random-products mb-2 d-flex'>
                                    <div className='w-40'>
                                        <img src='images/watch.jpg' className='img-fluid' alt='watch'></img>
                                    </div>
                                    <div className='w-60'>
                                        <h5>Sao dạo này lại vẽ tóc cụ ông lại dựng lên thế nhỉ,</h5>
                                        <ReactStars
                                            count={5}

                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$ 300</b>
                                    </div>
                                </div>
                                <div className='random-products mb-2 d-flex'>
                                    <div className='w-40'>
                                        <img src='images/watch.jpg' className='img-fluid' alt='watch'></img>
                                    </div>
                                    <div className='w-60'>
                                        <h5>Sao dạo này lại vẽ tóc cụ ông lại dựng lên thế nhỉ,</h5>
                                        <ReactStars
                                            count={5}

                                            size={24}
                                            value={4}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <b>$ 300</b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-9'>
                            <div className='filter-sort-gird mb-3'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='mb-0 d-block' style={{ width: "100px" }}>Sort by:</p>
                                        <select name='' id='' className='form-control form-select'>
                                            <option value="manual">Featured</option>
                                            <option value="best-selling" selected>Best selling</option>
                                            <option value="title-ascending">Alphabetically A-Z</option>
                                            <option value="title-descending">Alphabetically Z-A</option>
                                            <option value="price-ascending">Price low to high</option>
                                            <option value="price-descending">Price high to low</option>
                                            <option value="date-ascending">Date old to new</option>
                                            <option value="date-descending">Date new to old</option>

                                        </select>

                                    </div>
                                    <div className='d-flex align-items-center gap-10'>
                                        <p className='total-product mb-0'>21 Products</p>
                                        <div className='d-flex align-items-center gap-10 gird'>
                                            <img onClick={() => setGird(3)} className='d-block img-fluid' src='images/gr4.svg' alt='gird'></img>
                                            <img onClick={() => setGird(4)} className='d-block img-fluid' src='images/gr3.svg' alt='gird'></img>
                                            <img onClick={() => setGird(6)} className='d-block img-fluid' src='images/gr2.svg' alt='gird'></img>
                                            <img onClick={() => setGird(12)} className='d-block img-fluid' src='images/gr.svg' alt='gird'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='products-list mb-2'>
                                <div className='d-flex flex-wrap gap-10' >
                                <ProductCard gird={gird}/>
                                <ProductCard gird={gird}/>
                                <ProductCard gird={gird}/>
                                <ProductCard gird={gird}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
