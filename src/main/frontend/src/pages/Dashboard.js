import React from 'react';
import '../App.css';

const Dashboard = () => {
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

                <div style={{height: '1px', margin: '10% 10 %', background: 'black'}}></div>

                <div
                    className="sidebar-row drag-prevent cursor-pointer hover-bg-grey"
                    onClick={() => {
                        window.location.href = '/employee';
                    }}
                >
                    <div className="sidebar-icon">
                        <img src="images/people.png" width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">Employee</div>
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
                    style={{position: 'fixed', bottom: '2vh', left: '4vw', width: '18vw'}}
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
                <div className="layout-title">Dashboard</div>
            </div>
        </div>
    );
};

export default Dashboard;
