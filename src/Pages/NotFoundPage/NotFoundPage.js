import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorPhoto from '../../assets/Images/download.png'

const NotFoundPage = () => {
    const error = useRouteError()
    const handleBackHistory = () => {
        window.history.back()
    }
    return (
        <div className=' min-h-screen flex justify-center items-center'>
            <div>
                <img src={errorPhoto} alt="" />
                <p className="text-red-500">Something went wrong</p>
                <p className="text-red-400">{error.statusText || error.message}</p>
                <button
                    onClick={handleBackHistory}
                    className="btn btn-primary  my-4">Go To Back</button>
            </div>
        </div>
    );
};

export default NotFoundPage;