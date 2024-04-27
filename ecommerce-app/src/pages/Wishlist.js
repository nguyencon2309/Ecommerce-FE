import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Meta from "../components/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title="Wish List" />
      <BreadCrumb title="Wish List" />
      <div className="wishlist-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                    <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="wishlist-product-detail py-3 px-3">
                    <h5 className="title">iPhone 15 Pro Max 256GB | Chính hãng VN/A</h5>
                    <h6 className="price mb-3 mt-3">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                    <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="wishlist-product-detail py-3 px-3">
                    <h5 className="title">iPhone 15 Pro Max 256GB | Chính hãng VN/A</h5>
                    <h6 className="price mb-3 mt-3">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                    <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="wishlist-product-detail py-3 px-3">
                    <h5 className="title">iPhone 15 Pro Max 256GB | Chính hãng VN/A</h5>
                    <h6 className="price mb-3 mt-3">$ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                    <img src="images/watch.jpg" alt="watch" className="img-fluid w-100" />
                </div>
                <div className="wishlist-product-detail py-3 px-3">
                    <h5 className="title">iPhone 15 Pro Max 256GB | Chính hãng VN/A</h5>
                    <h6 className="price mb-3 mt-3">$ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
