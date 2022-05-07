import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement = <div>
        <p className='text-danger'>Error: {error.message}</p>
        </div>
      }

      if (loading) {
        return <p>Loading...</p>;
      }

      if(user){
        navigate('/home');
      }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height:"1px" }} className="bg-primary w-50"></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height:"1px" }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <div onClick={() => signInWithGoogle()}
            className='d-flex justify-content-center'>
                <button className='btn btn-light'>
                <img src="https://i.ibb.co/9wjKY1K/google.png" alt="" />
                <span>Sign In with Google</span>
                
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;