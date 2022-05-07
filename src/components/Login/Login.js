import React, { useRef } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";
import { ToastContainer,toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );

  let errorElement;
  if (error) {
      errorElement = <p className='text-danger'>Error: {error.message}</p>
}


  const handelSignIn = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  }

  if (loading || sending) {
    return <p>Loading...</p>;
  }

  let from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from, { replace: true });
  }

  const navigateRegiterPage = () =>{
    navigate('/registration');
  }

  const handelForgetPassword = async () =>{
    const email = emailRef.current.value;
    console.log(email);
    if(email){
      await sendPasswordResetEmail(email);
      toast('Send email');
    }
  }
  return (
    <div className="form-container h-100 ">
      <div className="d-flex justify-content-center mt-2 mb-2">
        <form className="w-50 form p-5 " onSubmit={handelSignIn}>
          <h2 className="text-center mb-3">Sign In</h2>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              ref={emailRef}
              className="form-control"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group mb-3">
            <label>Password</label>
            <input
              type="password"
              ref={passwordRef}
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>
          {errorElement}

          <input
            type="submit"
            className="btn btn-primary btn-block mb-3"
            value="Submit"
          />
          <div className="d-flex justify-content-between">
            <p className="forgot-password text-right">
              Forgot <button className="btn btn-link text-decoration-none p-0 pb-1" onClick={handelForgetPassword}>password?</button>
            </p>

            <p className="forgot-password text-right ">
              You have no account? Please <button className="btn btn-link text-decoration-none p-0 pb-1" onClick={navigateRegiterPage} >Sign Up</button>
            </p>
            </div>
            <SocialLogin></SocialLogin>
            
            </form>
            </div>
            <ToastContainer />
    </div>
  );
};

export default Login;
