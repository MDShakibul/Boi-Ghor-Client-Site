import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Registration = () => {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

const navigate = useNavigate();

  const nameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handelSignUp = event => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(email, password);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

const navigateLogin = () => {
  navigate('/login');
}

if (user) {
  navigate('/home');
}



    return (
        <div className="form-container h-100 ">
      <div className="d-flex justify-content-center mt-3 mb-3">
        <form className="w-50 form p-5 pb-3" onSubmit={handelSignUp}>
          <h2 className="text-center mb-3">Sign Up</h2>
          <div className="form-group mb-3">
            <label>Name</label>
            <input
              type="text"
              name="name"
              ref={nameRef}
              className="form-control"
              placeholder="Enter name"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
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
              name="password"
              ref={passwordRef}
              className="form-control"
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Confirm Password</label>
            <input
              type="password"
              name="Confirm Password"
              className="form-control"
              placeholder="Enter confirm password"
              required
            />
          </div>

          <input
            type="submit"
            className="btn btn-primary btn-block mb-3"
            value="Submit"
          />
          

            <p className="forgot-password text-right">
              Already have account? Please <Link className="text-decoration-none" to="/login" onClick={navigateLogin}>Sign In</Link>
            </p>
        </form>
      </div>
    </div>
    );
};

export default Registration; 