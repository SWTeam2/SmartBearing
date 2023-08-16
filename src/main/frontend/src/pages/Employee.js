import React, {useEffect, useState} from 'react';
import '../App.css';
import EmployeeRow from './EmployeeRow.js';
import logo_X from "../images/logo_X.png";
import label from "../images/label.png";
import folders from "../images/folders.png";
import user from "../images/user.png";
import chart from "../images/chart.png";
import bell from "../images/bell.png";
import {useNavigate} from 'react-router-dom';
import {logout} from "./useLogout.js";

const Employee = () => {
    const handleNavigate = useNavigate();
    const handleLogout = () => {
        // 로그아웃 기능을 여기에 추가합니다.
        logout(handleNavigate);
    };

    const [employeeData, setEmployeeData] = useState([]);

    const getEmployees = async () => {
        try {
            const employees = await fetch('/api/employees', {
                method: 'GET'
            });

            if (employees.ok) {
                const employeesData = await employees.json();
                setEmployeeData(employeesData);
            } else {
                console.log('사원 목록 불러오기 실패');
            }
        } catch (error) {
            console.error('사원 목록 불러오기 에러 - ', error);
        }
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div style={{display: 'flex', backgroundColor: '#F2F4F8', height: '100vh'}}>
            {/* 사이드바 */}
            <div style={{background: 'white', width: '18vw', height: '100%'}}>
                <div style={{padding: '15%'}}>
                    <img src={logo_X} width="100%" alt="로고"/>
                </div>

                <div className="sidebar-row drag-prevent">
                    <div className="sidebar-icon">
                        <img src={label} width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">사원코드</div>
                </div>
                <div className="sidebar-row drag-prevent">
                    <div className="sidebar-icon">
                        <img src={folders} width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">부서</div>
                </div>
                <div className="sidebar-row drag-prevent">
                    <div className="sidebar-icon">
                        <img src={user} width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">이름</div>
                </div>

                <div style={{height: '1px', margin: '10% 10%', background: 'black'}}></div>

                <div
                    className="sidebar-row drag-prevent cursor-pointer hover-bg-grey"
                    onClick={() => {
                        window.location.href = '/dashboard';
                    }}
                >
                    <div className="sidebar-icon">
                        <img src={chart} width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">Dashboard</div>
                </div>
                <div
                    className="sidebar-row drag-prevent cursor-pointer hover-bg-grey"
                    onClick={() => {
                        window.location.href = '/notification';
                    }}
                >
                    <div className="sidebar-icon">
                        <img src={bell} width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">Notification</div>
                </div>

                <div
                    style={{position: 'fixed', bottom: '0', left: '0', width: '18vw'}}
                    className="cursor-pointer drag-prevent"
                    onClick={handleLogout}
                >
                    <div style={{padding: '20px'}}>
                        <button className="logout-btn bg-charcoal" type="button" style={{width: '100%'}} onClick={logout}>
                            <div style={{paddingLeft: '5%', fontSize: '1.1rem'}}>LOGOUT</div>
                        </button>
                    </div>
                </div>
            </div>

            {/* main */}
            <div style={{width: '82vw', height: '100vh', overflow: 'auto'}}>
                <div className="row" style={{margin: '3% 4%'}}>
                    <div className="layout-title">Employee Management</div>
                    <div className="row cursor-pointer" style={{marginRight: '10%'}}>
                        <button className="employee-btn" type="button"
                                onClick={() => (window.location.href = '/employee/create')}>
                            NEW
                        </button>
                        <button className="employee-btn" type="button"
                                onClick={() => (window.location.href = '/employee/update')}>
                            EDIT
                        </button>
                        <button className="employee-btn" type="button"
                                onClick={() => (window.location.href = '/employee/delete')}>
                            DELETE
                        </button>
                    </div>
                </div>

                <div className="main-title-row drag-prevent">
                    <div style={{width: '3%'}}></div>
                    <div style={{width: '15%'}}>Employee ID</div>
                    <div style={{width: '12%'}}>Name</div>
                    <div style={{width: '15%'}}>Department</div>
                    <div style={{width: '10%'}}>Position</div>
                    <div style={{width: '10%'}}>In Charge</div>
                    <div style={{width: '20%'}}>Email</div>
                    <div style={{width: '15%'}}>Phone</div>
                </div>
                {employeeData.map((employee) => (
                    <EmployeeRow key={employee.employeeId} employee={employee}/>
                ))}
            </div>
        </div>
    );
};

export default Employee;
