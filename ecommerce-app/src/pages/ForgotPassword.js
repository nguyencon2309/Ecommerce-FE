import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom"
const ForgotPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <BreadCrumb title="Forgot Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
        <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className="text-center mb-3">Reset Your Password</h3>
                    <p className="text-center mt-2 mb-3">
                      We will send you an email reset your password
                    </p>
                    <form action="" className="d-flex flex-column gap-15">
                        <div className="">
                            <input 
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="form-control" 
                            />
                        </div>
                        
                        <div>
                            
                            <div className="mt-3 d-flex justify-content-center
                            flex-column gap-15 align-items-center">
                                <button 
                                type="submit" className="button border-0">Submit</button>
                                <Link to='/login' className="fg-pw" >Cancel?</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
