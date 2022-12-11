import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../componnets/Loading/Loading';
import { AuthContext } from '../../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Loading></Loading>
    }
    if (user?.email === 'mdsorwar4039@gmail.com') {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;