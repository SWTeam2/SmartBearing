import React from 'react';
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({path, element}) => {
    const token = localStorage.getItem('token');

    if(!token) {
        return <Navigate to="/" replace />;
    }

    return <Route path={path} element={element} />;
};

export default PrivateRoute;