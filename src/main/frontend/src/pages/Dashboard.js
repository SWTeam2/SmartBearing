import React, {useEffect, useState} from 'react';
import '../App.css';
import logo_X from "../images/logo_X.png";
import label from "../images/label.png";
import folders from "../images/folders.png";
import user from "../images/user.png";
import people from "../images/people.png";
import bell from "../images/bell.png";
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
    }
    const bearing = ['Bearing 1_1', 'Bearing 1_2', 'Bearing 1_3', 'Bearing 1_4', 'Bearing 1_5', 'Bearing 2_1', 'Bearing 2_2', 'Bearing 2_3', 'Bearing 2_4', 'Bearing 2_5', 'Bearing 3_1'];

    const [selectedBearing, setSelectedBearing] = useState(bearing[0]);
    const [logSensorData, setLogSensorData] = useState([]);
    const [logPredictionData, setLogPredictionData] = useState([]);
    const reversedLogSensorData = [...logSensorData].reverse();
    const reversedLogPredictionData = [...logPredictionData].reverse();
    let maxSensorId = 0;
    let maxPredictionId = 0;

    const getSensor = async () => {
        try {
            const response = await fetch(`/api/bearing/sensor/${selectedBearing}/${maxSensorId + 1}`, {
                method: 'GET'
            });

            if (response.ok) {
                const responseData = await response.json();

                const newLogSensorData = responseData.map(responseData => ({
                    id: responseData.id,
                    timestamp: `${responseData.hour}:${responseData.minutes}:${responseData.second}:${responseData.microsecond}`,
                    vert_accel: responseData.vert_accel,
                    horiz_accel: responseData.horiz_accel
                }));

                maxSensorId = Math.max(...newLogSensorData.map(data => data.id));
                setLogSensorData(prevData => [...prevData, ...newLogSensorData]);
            } else {
                console.log('데이터 불러오기 실패');
            }
        } catch (error) {
            console.error('데이터 불러오기 에러 - ', error);
        }
    };

    const getPrediction = async () => {
        try {
            // const response = await fetch(`/api/bearing/prediction/${selectedBearing}/${maxPredictionId + 1}`, {
            //     method: 'GET'
            // });
            const response = await fetch(`/api/bearing/prediction/ex/1`, {
                method: 'GET'
            });

            if (response.ok) {
                const responseData = await response.json();

                const newLogPredictionData = responseData.map(responseData => ({
                    id: responseData.pred_id,
                    timestamp: responseData.timestamp,
                    prediction: responseData.prediction
                }));

                maxPredictionId = Math.max(...newLogPredictionData.map(data => data.id));
                setLogPredictionData(prevData => [...prevData, ...newLogPredictionData]);
            } else {
                console.log('데이터 불러오기 실패');
            }
        } catch (error) {
            console.error('데이터 불러오기 에러 - ', error);
        }
    };

    useEffect(() => {
        // selectedBearing 값이 변경될 때 호출되는 부분
        setLogSensorData([]); // 초기화
        setLogPredictionData([]); // 초기화
        getSensor();
        getPrediction();

        // 10초마다 API 요청을 보내고 데이터 업데이트
        const interval = setInterval(() => {
            getSensor();
            getPrediction();
        }, 10000); // 10초마다 실행

        // 컴포넌트가 unmount될 때 interval 정리
        return () => {
            clearInterval(interval);
        };
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
                                getSensor(bearingItem);
                                getPrediction(bearingItem);
                            }}
                        >
                            {bearingItem}
                        </button>
                    ))}
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '3%', marginRight: '3%'}}>
                    <div className="dashboard drag-prevent" style={{display: 'flex', width: '46%'}}>
                        <div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8'}}>Contact</div>
                            <div className="dashboard-content">
                                <div style={{fontWeight: 'bold'}}>데이터1팀 : 홍길동 (hgd@gmail.com)</div>
                            </div>
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

                        {reversedLogPredictionData.map((log, index) => (
                            <div
                                key={index}
                                style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}
                            >
                                <div style={{color: '#8A96A8', fontSize: '14px'}}>{log.timestamp}</div>
                                <div style={{color: '#8A96A8', fontSize: '14px'}}>{log.prediction}</div>
                            </div>
                        ))}
                    </div>

                    <div className="dashboard drag-prevent" style={{width: '79%', height: '250px', overflow: 'auto'}}>
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent: 'space-between', marginLeft: '3%', marginRight: '3%'}}>
                    <div className="dashboard  drag-prevent"
                         style={{width: '20%', height: '250px', overflow: 'auto', marginRight: '1%'}}>
                        <div style={{fontWeight: 'bold', fontSize: '18px', marginBottom: '20px'}}>Log - Amplitude</div>
                        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '6px'}}>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>Timestamp</div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>V</div>
                            <div style={{fontWeight: 'bold', color: '#8A96A8', fontSize: '14px'}}>H</div>
                        </div>

                        {reversedLogSensorData.map((log, index) => (
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