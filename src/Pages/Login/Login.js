import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { loginWithGoogle } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const handleLoginWithGoogle = () => {
        loginWithGoogle(googleProvider)
            .then((result) => {
                navigate('/')
            }).catch((error) => {
                console.error(error)
                // const errorMessage = error.message;
            });
    }
    return (
        <div className=' text-center mt-9 '>
            <p className='font-bold mb-2'>Sign In with</p>
            <button onClick={handleLoginWithGoogle} className="btn btn-circle btn-light">
                <FaGoogle className='text-2xl text-blue-500' />
            </button>
        </div>
    );
};

export default Login;