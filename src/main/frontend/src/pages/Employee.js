import React from 'react';
import '../App.css';

const Employee = () => {
    const logout = () => {
        // 로그아웃 기능을 여기에 추가합니다.
    };

    return (
        <div style={{display: 'flex', backgroundColor: '#F2F4F8', height: '100vh'}}>
            {/* 사이드바 */}
            <div style={{background: 'white', width: '18vw', height: '100%'}}>
                <div style={{padding: '15%'}}>
                    <img src="images/logo_X.png" width="100%" alt="로고"/>
                </div>

                <div className="sidebar-row drag-prevent">
                    <div className="sidebar-icon">
                        <img src="images/label.png" width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">사원코드</div>
                </div>
                <div className="sidebar-row drag-prevent">
                    <div className="sidebar-icon">
                        <img src="images/folders.png" width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">부서</div>
                </div>
                <div className="sidebar-row drag-prevent">
                    <div className="sidebar-icon">
                        <img src="images/user.png" width="100%" alt="아이콘"/>
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
                        <img src="images/chart.png" width="100%" alt="아이콘"/>
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
                        <img src="images/bell.png" width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">Notification</div>
                </div>

                <div
                    style={{position: 'fixed', bottom: '2vh', left: '3.8vw', width: '18vw'}}
                    onClick={logout}
                    className="cursor-pointer"
                >
                    <div className="sidebar-row drag-prevent cursor-pointer">
                        <div className="sidebar-icon">
                            <img src="images/logout.png" width="100%" alt="아이콘"/>
                        </div>
                        <div style={{paddingLeft: '5%', fontSize: '1.1rem'}}>LOGOUT</div>
                    </div>
                </div>
            </div>

            {/* main */}
            <div style={{width: '82vw', height: '100vh'}}>
                <div className="row" style={{margin: '3% 4%'}}>
                    <div className="layout-title">Employee Management</div>
                    <div className="row row-row cursor-pointer">
                        <div>NEW</div>
                        <div>EDIT</div>
                        <div>DELETE</div>
                    </div>
                </div>

                <div style={{height: '84vh', overflow: 'auto'}}>
                    <div className="main-title-row drag-prevent">
                        <div style={{width: '15%'}}>Employee ID</div>
                        <div style={{width: '15%'}}>Name</div>
                        <div style={{width: '15%'}}>Department</div>
                        <div style={{width: '10%'}}>Position</div>
                        <div style={{width: '10%'}}>In Charge</div>
                        <div style={{width: '20%'}}>Email</div>
                        <div style={{width: '15%'}}>Phone</div>
                    </div>
                    <div className="main-row drag-prevent">
                        <div style={{width: '15%'}}>1001</div>
                        <div style={{width: '15%'}}>홍길동</div>
                        <div style={{width: '15%'}}>데이터 분석</div>
                        <div style={{width: '10%'}}>관리자</div>
                        <div style={{width: '10%'}}></div>
                        <div style={{width: '20%'}}>hgd@gmail.com</div>
                        <div style={{width: '15%'}}>010-0000-0000</div>
                    </div>
                    <div className="main-row drag-prevent">
                        <div style={{width: '15%'}}>1002</div>
                        <div style={{width: '15%'}}>홍길순</div>
                        <div style={{width: '15%'}}>데이터 분석</div>
                        <div style={{width: '10%'}}>사원</div>
                        <div style={{width: '10%'}}>데이터1</div>
                        <div style={{width: '20%'}}>hgs@gmail.com</div>
                        <div style={{width: '15%'}}>010-0000-0001</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;
