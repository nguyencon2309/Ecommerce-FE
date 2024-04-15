import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs"
const Header = () => {
  return (
    <>
      <header className='header-top-strip py-1'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6 text-center'>
              <p className='text-white mb-0 '>
                Free Shipping Over $100 & Free Return
              </p>
            </div>
            <div className='col-6 text-center'>
              <p className='text-end text-white mb-0'>
                Hot-line:
                <a className='text-white' href='tel:+(0000)-123456789'>(0000)-123456789</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper py-1'>
        <div className='row align-items-center'>
          <div className='col-2 align-items-center '>
            <h2 >
              <Link className='text-white'>Dev Coron</Link>
            </h2>
          </div>
          <div className='col-5'>

            <div className="input-group">
              <input
                type="text"
                className="form-control py-2"
                placeholder="Search Product Here..."
                aria-label="Search Product Here..."
                aria-describedby="basic-addon2"
              />
              <span
                className="input-group-text p-2"
                id="basic-addon2"
              >

                <BsSearch className='fs-6' />
              </span>
            </div>
          </div>
          <div className='col-5'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'>

              <div>
                <Link className='d-flex align-items-center gap-10'>
                  <img src="images/compare.svg" alt="compare"></img>
                  <p className='mb-0'>
                    Compare <br />Product

                  </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10'>
                  <img src="images/wishlist.svg" alt="wishlist"></img>
                  <p className='mb-0'>
                    Favourite <br /> Wishlist
                  </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10'>
                  <img src="images/user.svg" alt="user"></img>
                  <p className='mb-0'>
                    Log in <br /> My Account
                  </p>
                </Link>
              </div>
              <div>
                <Link className='d-flex align-items-center gap-10'>
                  <img src="images/cart.svg" alt="cart"></img>
                  <div className='d-flex flex-column gap-10'>
                    <span className='badge bg-white text-dark'>0</span>
                    <p className='ab-0'>$ 500</p>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </header>

      <header className='header-bottom py-1' >
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex  align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img src="images/menu.svg" alt='menu'></img>
                      <span className='me-5 d-inline-block'>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                    </ul>
                  </div>
                </div>
                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to=''>Home</NavLink>
                    <NavLink to=''>Our Store</NavLink>
                    <NavLink to=''>Blogs</NavLink>
                    <NavLink to='contact'>Contack</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
    </>
  )
}

export default Header;