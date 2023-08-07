import React from 'react';
import './App.css'; // 스타일을 위한 Login.css 파일을 가정합니다.

const Login = () => {
    const login = () => {
        // 로그인 기능을 여기에 추가합니다.
    };

    return (
        <div style={{ backgroundColor: '#F2F4F8', width: '100%', height: '100%', margin: 0 }}>
            <div className="center-outer-div">
                <div className="center-inner-div">
                    <div style={{ width: '220px', padding: '40px', marginBottom: '25px' }}>
                        <img src="images/logo_O.png" width="100%" alt="로고" />
                    </div>
                    <div>
                        <input className="center-box-input" id="id" placeholder="아이디" />
                        <input className="center-box-input" id="password" placeholder="비밀번호" type="password" />
                        <button className="center-box-btn bg-blue" type="button" onClick={login}>
                            로그인
                        </button>
                        <button className="center-box-btn bg-charcoal" type="button" onClick={() => (window.location.href = '/signup')}>
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;