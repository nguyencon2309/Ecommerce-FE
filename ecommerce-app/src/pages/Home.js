import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee'
import { BlogCard } from '../components/BlogCard';
import { ProductCard } from '../components/ProductCard';
import { SpecialProduct } from '../components/SpecialProduct';
const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <div className='main-banner  position-relative'>
                <img src='images/main-banner-1.jpg'
                  className='img-fluid rounded-3'
                  alt='main-banner'>

                </img>
                <div className='main-banner-content position-absolute'>
                  <h4>SUPERCHARGED FOR PROS</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 or <br />$41.62/mo.</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner  position-relative'>
                  <img src='images/catbanner-01.jpg'
                    className='img-fluid rounded-3'
                    alt='main-banner'>

                  </img>
                  <div className='small-banner-content position-absolute'>
                    <h4>BEST SALE</h4>
                    <h5>Laptop Max</h5>
                    <p>From $999.00 or<br />$41.62/mo.</p>

                  </div>
                </div>
                <div className='small-banner  position-relative'>
                  <img src='images/catbanner-02.jpg'
                    className='img-fluid rounded-3'
                    alt='main-banner'>

                  </img>
                  <div className='small-banner-content position-absolute'>
                    <h4>NEW ARRIVAL</h4>
                    <h5>Buy Ipad Air</h5>
                    <p>From $999.00 or<br /> $41.62/mo.</p>

                  </div>
                </div>
                <div className='small-banner  position-relative'>
                  <img src='images/catbanner-03.jpg'
                    className='img-fluid rounded-3'
                    alt='main-banner'>

                  </img>
                  <div className='small-banner-content position-absolute'>
                    <h4>10% OFF</h4>
                    <h5>SmartWatch 7</h5>
                    <p>From $999.00 or<br /> $41.62/mo.</p>

                  </div>
                </div>
                <div className='small-banner  position-relative'>
                  <img src='images/catbanner-04.jpg'
                    className='img-fluid rounded-3'
                    alt='main-banner'>

                  </img>
                  <div className='small-banner-content position-absolute'>
                    <h4>free engraving</h4>
                    <h5>AirProds Max</h5>
                    <p>From $999.00 or<br /> $41.62/mo.</p>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex justify-content-between align-items-center '>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service.png" alt='services'></img>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className='mb-0'>For all over $100</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-02.png" alt='services'></img>
                  <div>
                    <h6>Daily Suprise Offers</h6>
                    <p className='mb-0'>Save up to 25% off</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-03.png" alt='services'></img>
                  <div>
                    <h6>Support 24/7</h6>
                    <p className='mb-0'>Shop with an expert</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-04.png" alt='services'></img>
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className='mb-0'>Get factory direct price</p>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <img src="images/service-05.png" alt='services'></img>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className='mb-0'>100% Protect payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='home-wrapper-2 py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap'>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/headphone.jpg" alt='camera'></img>
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/camera.jpg" alt='camera'></img>
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/tv.jpg" alt='camera'></img>
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/watch.jpg" alt='camera'></img>
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/headphone.jpg" alt='camera'></img>
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Cameras</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/camera.jpg" alt='camera'></img>
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/tv.jpg" alt='camera'></img>
                </div>
                <div className='d-flex align-items-center gap'>
                  <div>
                    <h6>Smart Watch</h6>
                    <p>10 item</p>
                  </div>
                  <img src="images/watch.jpg" alt='camera'></img>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured-wrapper py-3 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Featured Collection</h3>
            </div>
          </div>
          <div className='row'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='famous-wrapper py-3 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
          <div className='col-3'>
              <div className='famous-card position-relative text-white'>
                <img className='img-fluid' src='images/famous-2.jpg' alt='famous'></img>
                <div className='famous-content position-absolute'>
                  <h6>Big Screen</h6>
                  <h5>Smart Watches Serious 7</h5>
                  <p>For $399.00 or $16.25/mo for 24 mo</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src='images/famous-1.jpg' alt='famous'></img>
                <div className='famous-content position-absolute'>
                  <h6>Big Screen</h6>
                  <h5>Smart Watches Serious 7</h5>
                  <p>For $399.00 or $16.25/mo for 24 mo</p>
                </div>
              </div>
            </div>
            
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src='images/famous-1.jpg' alt='famous'></img>
                <div className='famous-content position-absolute'>
                  <h6>Big Screen</h6>
                  <h5>Smart Watches Serious 7</h5>
                  <p>For $399.00 or $16.25/mo for 24 mo</p>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className='famous-card position-relative'>
                <img className='img-fluid' src='images/famous-1.jpg' alt='famous'></img>
                <div className='famous-content position-absolute'>
                  <h6>Big Screen</h6>
                  <h5>Smart Watches Serious 7</h5>
                  <p>For $399.00 or $16.25/mo for 24 mo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='special-wrapper py-3 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Special Products</h3>
            </div>
          </div>
          <div className='row'>
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className='popular-wrapper py-3 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Popular Products</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-2'>

            </div>
            <div className='col-2'>

            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='marquee-wrapper py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper'>
                <Marquee className='d-flex'>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-01.png' alt='brand'></img>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-02.png' alt='brand'></img>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-03.png' alt='brand'></img>
                  </div>

                  <div className='mx-4 w-25'>
                    <img src='images/brand-04.png' alt='brand'></img>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-05.png' alt='brand'></img>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-06.png' alt='brand'></img>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-07.png' alt='brand'></img>
                  </div>
                  <div className='mx-4 w-25'>
                    <img src='images/brand-08.png' alt='brand'></img>
                  </div>

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-wrapper py-2 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <h3 className='section-heading'>Our Laster News</h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
            <div className='col-3'>
              <BlogCard/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home