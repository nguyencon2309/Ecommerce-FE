import React from 'react';
import { Link } from 'react-router-dom';
import {BsInstagram,BsYoutube,BsFacebook,BsGithub,BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt='newsletter'></img>
                <h2 className='mb-0 text-white'>Sign Up for Newsletter</h2>
              </div>

            </div>
            <div className='col-7'>
            <div className="input-group">
              <input
                type="text"
                className="form-control py-1"
                placeholder="Your Email Address..."
                aria-label="Your Email Address..."
                aria-describedby="basic-addon2"
              />
              <span
                className="input-group-text p-2"
                id="basic-addon2"
              >

                Subcribe
              </span>
            </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3 text-white'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-4'>
              <h4 className='mb-2'>Contact Us</h4>
              <div>
                <address className='fs-6'>
                  Demo Store <br/>
                  Lien Chieu, Da Nang <br/>
                  Viet Nam
                </address>
                <a href='tel:+0123456789' className='d-block mt-1 mb-1 text-white'>+012 3456789</a>
                <a href='maito:Demo_Example@ecommerce.com' className='d-block mt-1 mb-1 text-white'>Demo_Example@ecommerce.com</a>
                
                <div className='social_icons d-flex align-items-center gap-15 mt-1'>
                  <a href=''>
                    <BsInstagram className='fs-4'/>
                  </a>
                  <a href=''>
                    <BsFacebook className='fs-4'/>
                  </a>
                  <a href=''>
                    <BsGithub className='fs-4'/>
                  </a>
                  <a href=''>
                    <BsYoutube className='fs-4'/>
                  </a>
                  <a href=''>
                    <BsLinkedin className='fs-4'/>
                  </a>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className=' mb-2'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link >Privacy Policy</Link>
                <Link >Refund Policy</Link>
                <Link >Shipping Policy</Link>
                <Link >Terms & Condition</Link>
                <Link >Blogs</Link>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-2'>Account</h4>
              <div className='footer-links d-flex flex-column'>
                <Link >About</Link>
                <Link >Faq</Link>
                <Link >Contact</Link>
                <Link >Search</Link>
                <Link >Size Chart</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-2'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link >Accessories</Link>
                <Link >Laptop</Link>
                <Link >Headphones</Link>
                <Link >Tablet</Link>
                <Link >Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-center mb-0 text-white'>
                &copy; {new Date().getFullYear()}; Powered by Developer's Coron
              </p>

            </div>

          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;

