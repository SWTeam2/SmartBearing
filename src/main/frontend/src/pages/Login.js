import React, {useState} from 'react';
import '../App.css';
import logo from '../images/logo_O.png';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();

    const login = async () => {
        console.log(id);
        console.log(password);
        try {
            const response = await fetch('api/members/login', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({memberId: id, password: password})
            });

            if(response.ok) {
                history.push('/dashboard');
            } else {
                console.log('로그인 실패');
            }
        } catch(error) {
            console.error('로그인 에러', error);
        }
    };

    return (
        <div style={{ backgroundColor: '#F2F4F8', width: '100%', height: '100%', margin: 0 }}>
            <div className="center-outer-div">
                <div className="center-inner-div">
                    <div style={{ width: '220px', padding: '40px', height: '100px', marginBottom: '25px' }}>
                        <img src={logo} width="100%" alt="로고" />
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