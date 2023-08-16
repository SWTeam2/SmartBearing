import React, {Component} from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const token = localStorage.getItem('token');
    if(!token || token === "undefined") {
        alert("로그인 후 접근 가능한 페이지입니다.");
        return <Navigate to={"/"} replace />;
    }

    return <Outlet />;
};

export default AuthGuard;
