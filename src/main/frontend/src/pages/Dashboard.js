import React from 'react';
import '../App.css';
import logo_X from "../images/logo_X.png";
import label from "../images/label.png";
import folders from "../images/folders.png";
import user from "../images/user.png";
import people from "../images/people.png";
import bell from "../images/bell.png";
import etc from "../images/etc.png";

const Dashboard = () => {
    const logout = () => {
        // 로그아웃 기능을 여기에 추가합니다.
    };

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
                        window.location.href = '/employee';
                    }}
                >
                    <div className="sidebar-icon">
                        <img src={people} width="100%" alt="아이콘"/>
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
                        <img src={bell} width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">Notification</div>
                </div>

                <div
                    style={{position: 'fixed', bottom: '0', left: '0', width: '18vw'}}
                    className="cursor-pointer drag-prevent"
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
                    <div className="layout-title">Dashboard</div>
                </div>
                <div className="cursor-pointer"
                     style={{
                         marginLeft: '4%',
                         marginRight: '4%',
                         display: 'flex',
                         borderBottom: '1.5px solid #DDE1E6'
                     }}>
                    <button className="bearing-btn" type="button">
                        Bearing 1_1
                    </button>
                    <button className="bearing-btn" type="button">
                        Bearing 1_2
                    </button>
                    <button className="bearing-btn" type="button">
                        Bearing 1_3
                    </button>
                    <button className="bearing-btn" type="button">
                        Bearing 1_4
                    </button>
                    <button className="bearing-btn" type="button">
                        Bearing 1_5
                    </button>
                    <div style={{marginLeft: '15px', width: '15px', height: '20px', lineHeight: '50px'}}>
                        <img src={etc} width="100%" alt="아이콘"/>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Dashboard;
