import React from 'react';
import '../App.css';
import logo_X from "../images/logo_X.png";
import label from "../images/label.png";
import folders from "../images/folders.png";
import user from "../images/user.png";
import people from "../images/people.png";
import bell from "../images/bell.png";
import etc from "../images/etc.png";
import message from "../images/message.png";

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
                        <button className="logout-btn bg-charcoal" type="button" style={{width: '100%'}}
                                onClick={logout}>
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
                         margin: '14px 3% 0% 3%',
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

                <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '3%', marginRight: '3%'}}>
                    <div className="dashboard drag-prevent" style={{
                        display: 'flex',
                        width: '46%',
                        justifyContent: 'space-between',
                        alignContent: 'center'
                    }}>
                        <div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8'}}>Contact</div>
                            <div className="dashboard-content">
                                <div style={{fontWeight: 'bold'}}>데이터1팀 : 홍길동 (hgd@gmail.com)</div>
                            </div>
                        </div>
                        <div style={{marginRight: '10px', width: '20px', height: '50px', lineHeight: '65px'}}>
                            <img src={message} width="100%" alt="아이콘"/>
                        </div>
                    </div>

                    <div className="dashboard drag-prevent"
                         style={{display: 'flex', width: '25%', marginLeft: '2%', marginRight: '2%'}}>
                        <div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8'}}>Lisk Level</div>
                            <div className="dashboard-content">
                                <div style={{fontWeight: 'bold'}}>High</div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard drag-prevent" style={{display: 'flex', width: '25%'}}>
                        <div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8'}}>Prediction</div>
                            <div className="dashboard-content">
                                <div style={{fontWeight: 'bold'}}>0000000</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '3%', marginRight: '3%'}}>
                    <div className="dashboard drag-prevent" style={{width: '20%', height: '250px', overflow: 'auto', marginRight: '2%'}}>
                        <div style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '20px'}}>Log - Prediction</div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>Timestamp</div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>RUL</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 1</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 2</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 3</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 4</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 5</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 6</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 7</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 8</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 9</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 10</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                    </div>

                    <div className="dashboard drag-prevent" style={{width: '78%', height: '250px', overflow: 'auto'}}>
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '3%', marginRight: '3%'}}>
                    <div className="dashboard drag-prevent" style={{width: '20%', height: '250px', overflow: 'auto', marginRight: '2%'}}>
                        <div style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '20px'}}>Log - Amplitude</div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>Timestamp</div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>V</div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>H</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 1</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 2</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 3</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 4</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 5</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 6</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 7</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 8</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 9</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>Timestamp 10</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                            <div style={{color: '#8A96A8', fontSize: '14px'}}>00</div>
                        </div>
                    </div>

                    <div className="dashboard drag-prevent" style={{width: '36%', height: '250px', overflow: 'auto', marginRight: '2%'}}>
                    </div>

                    <div className="dashboard drag-prevent" style={{width: '36%', height: '250px', overflow: 'auto'}}>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
