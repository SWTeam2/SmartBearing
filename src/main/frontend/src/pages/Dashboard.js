import React, {useEffect, useState} from 'react';
import '../App.css';
import logo_X from "../images/logo_X.png";
import label from "../images/label.png";
import folders from "../images/folders.png";
import user from "../images/user.png";
import people from "../images/people.png";
import bell from "../images/bell.png";
import message from "../images/message.png";
import {useNavigate} from 'react-router-dom';
import {logout} from "./useLogout.js";
import useMemberId from "./useMemberId.js";

const Dashboard = () => {
    const handleNavigate = useNavigate();
    const memberId = useMemberId();
    const [employeeInfo, setEmployeeInfo] = useState(null);

    useEffect(() => {
        if(memberId) {
            fetch(`/api/employees/${memberId}`)
                .then(response => response.json())
                .then(data => {
                    setEmployeeInfo(data);
                })
                .catch(error => {
                    console.error('사원 정보 불러오기 에러 - ', error)
                })
        }
    }, [memberId]);

    const handleLogout = () => {
        logout(handleNavigate);
    const bearing = ['Bearing 1_1', 'Bearing 1_2', 'Bearing 1_3', 'Bearing 1_4', 'Bearing 1_5', 'Bearing 2_1', 'Bearing 2_2', 'Bearing 2_3', 'Bearing 2_4', 'Bearing 2_5', 'Bearing 3_1'];

    const [selectedBearing, setSelectedBearing] = useState(bearing[0]);
    const [logPredictionData, setLogPredictionData] = useState([]);

    const logout = () => {
        // 로그아웃 기능을 여기에 추가합니다.
    };

    const getInitialSensor = async () => {
        try {
            const response = await fetch(`/api/bearing/sensor/${selectedBearing}/1`, {
                method: 'GET'
            });

            if (response.ok) {
                const responseData = await response.json();

                // logPredictionData 업데이트
                setLogPredictionData(prevData => [
                    ...prevData,
                    ...responseData.map(responseData => ({
                        timestamp: `${responseData.hour}:${responseData.minutes}:${responseData.second}:${responseData.microsecond}`,
                        vert_accel: responseData.vert_accel,
                        horiz_accel: responseData.horiz_accel
                    }))
                ]);
            } else {
                console.log('데이터 불러오기 실패');
            }
        } catch (error) {
            console.error('데이터 불러오기 에러 - ', error);
        }
    };

    useEffect(() => {
        // 컴포넌트가 렌더링될 때 한 번 실행되는 부분
        getInitialSensor(); // 초기 데이터만 가져오도록 수정
    }, []);

    useEffect(() => {
        // selectedBearing 값이 변경될 때 호출되는 부분
        getInitialSensor(); // 데이터 가져오는 호출을 이쪽으로 이동
    }, [selectedBearing]);
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
                    <div className="sidebar-text">{employeeInfo?.employeeId}</div>
                </div>
                <div className="sidebar-row drag-prevent">
                    <div className="sidebar-icon">
                        <img src={folders} width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">{employeeInfo?.department}</div>
                </div>
                <div className="sidebar-row drag-prevent">
                    <div className="sidebar-icon">
                        <img src={user} width="100%" alt="아이콘"/>
                    </div>
                    <div className="sidebar-text">{employeeInfo?.name}</div>
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
                    onClick={handleLogout}
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

                    {bearing.map((bearingItem, index) => (
                        <button
                            key={index}
                            className={`bearing-btn ${selectedBearing === bearingItem ? 'selected-bearing' : ''}`}
                            type="button"
                            onClick={() => {
                                setSelectedBearing(bearingItem);
                                getInitialSensor(bearingItem);
                            }}
                        >
                            {bearingItem}
                        </button>
                    ))}
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
                         style={{display: 'flex', width: '26%', marginLeft: '1%', marginRight: '1%'}}>
                        <div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8'}}>Lisk Level</div>
                            <div className="dashboard-content">
                                <div style={{fontWeight: 'bold', color: '#DA1E28'}}>High</div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard drag-prevent" style={{display: 'flex', width: '26%'}}>
                        <div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8'}}>Prediction</div>
                            <div className="dashboard-content">
                                <div style={{fontWeight: 'bold'}}>0000000</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '3%', marginRight: '3%'}}>
                    <div className="dashboard drag-prevent"
                         style={{width: '20%', height: '250px', overflow: 'auto', marginRight: '1%'}}>
                        <div style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '20px'}}>Log - Prediction</div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>Timestamp</div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>P</div>
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

                    <div className="dashboard drag-prevent" style={{width: '79%', height: '250px', overflow: 'auto'}}>
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '3%', marginRight: '3%'}}>
                    <div className="dashboard"
                         style={{width: '20%', height: '250px', overflow: 'auto', marginRight: '1%'}}>
                        <div style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '20px'}}>Log - Amplitude</div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>Timestamp</div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>V</div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>H</div>
                        </div>

                        {logPredictionData.reverse().map((log, index) => (
                            <div
                                key={index}
                                style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}
                            >
                                <div style={{color: '#8A96A8', fontSize: '14px'}}>{log.timestamp}</div>
                                <div style={{color: '#8A96A8', fontSize: '14px'}}>{log.vert_accel}</div>
                                <div style={{color: '#8A96A8', fontSize: '14px'}}>{log.horiz_accel}</div>
                            </div>
                        ))}
                    </div>

                    <div className="dashboard drag-prevent"
                         style={{width: '37%', height: '250px', overflow: 'auto', marginRight: '1%'}}>
                    </div>

                    <div className="dashboard drag-prevent" style={{width: '37%', height: '250px', overflow: 'auto'}}>
                    </div>
                </div>

                <div style={{height: '30px', width: '100%'}}></div>
            </div>
        </div>
    );
};

export default Dashboard;