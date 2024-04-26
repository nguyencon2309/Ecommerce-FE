import React from 'react'
import Meta from '../components/Meta'
import { BreadCrumb } from '../components/BreadCrumb'
import { FaHome } from "react-icons/fa";

import { IoMdCall, IoMdMail } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";


const Contact = () => {
  return (
    <>
      <Meta title='Contact' />
      <BreadCrumb title="Contact" />
      <div className='contact-wrapper home-wrapper-2 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 p-0'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.5959892400133!2d76.91247277485931!3d28.88063267277215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390da3c19ae3e815%3A0x63f2060132f153ac!2sBus%20Stand%20Kharkhoda!5e0!3m2!1svi!2s!4v1714160314495!5m2!1svi!2s"
                width="600"
                height="450"
                className='border-0 w-100'
                allowFullScreen=""
                loading="lazy" referrerPolicy="no-referrer-when-downgrade">

              </iframe>
            </div>

            <div className='col-12 mt-5'>
              <div className='contact-liner-wrapper d-flex justify-content-between'>
                <div>
                  <h3 className='contact-title mb-4'>Contact Us</h3>
                  <form action='' className='d-flex flex-column gap-15'>
                    <div>
                      <input type='text' className='form-control' placeholder='Name'/>
                    </div>
                    <div>
                      <input type='email' className='form-control' placeholder='Email'/>
                    </div>
                    <div>
                      <input type='tel' className='form-control' placeholder='Phone Number'/>
                    </div>
                    <div>
                      <textarea
                        id=''
                        name=''
                        className='w-100 form-control'
                        cols={30}
                        rows={4}
                        placeholder='Comments'
                      />
                    </div>
                    <div>
                      <button className='button border-0'>Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className='contact-title mb-4'>Get In Touch With Us</h3>
                  <div>
                    <ul className='ps-0'>
                      <li className='mb-3'>
                        <FaHome className='fs-5'/>
                        <address>123 Âu Cơ, Hoà Khánh Bắc, Liên Chiểu, Đà Nẵng , VietNam</address>
                      </li>
                      <li className='mb-3'>
                        <IoMdCall className='fs-5'/>
                        <a href='tel:+012 3456789'>+012 3456789</a>
                      </li>
                      <li className='mb-3'>
                        <IoMdMail className='fs-5'/>
                        <a href='mailTo:leeevan748@gmail.com'>leeevan748@gmail.com</a>
                      </li>
                      <li className='mb-3'>
                        <FaInfoCircle className='fs-5'/>
                        <p >Saturday, 28/4 4:00 AM</p>
                      </li>
                    </ul>
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

export default Contact