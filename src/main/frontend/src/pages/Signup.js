import React, {useState} from "react";
import '../App.css';

const Signup = () => {
    const [employeeId, setEmployeeId] = useState('');
    const [email, setEmail] = useState('');
    const [memberId, setMemberId] = useState('');
    const [password, setPassword] = useState('');

    const checkEmployee = async () => {
        try {
            const response = await fetch('/api/members/signup/check-employee', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({employeeId, email})
            });

            if(response.ok) {
                const isEmployeeValid = await response.json();
                if(isEmployeeValid) {
                    alert('사원 정보가 확인되었습니다.');
                } else {
                    alert('사원 정보가 일치하지 않습니다.');
                }
            } else {
                console.log('사원 정보 확인 실패');
            }
        } catch(error) {
            console.log('사원 정보 확인 에러', error);
        }
    };

    const signUp = async () => {
        try {
            const response = await fetch('/api/members/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({employeeId, memberId, password})
            });

            if(response.ok) {
                alert('회원가입이 완료되었습니다.');

                window.location.href = '/';
            } else {
                console.log('회원가입 실패');
            }
        } catch(error) {
            console.error('회원가입 에러', error);
        }
    };

    return(
        <div style={{ backgroundColor: '#F2F4F8', width: '100%', height: '100%', margin: 0 }}>
            <div className="center-outer-div">
                <div className="center-inner-div" style={{textAlign: 'center'}}>
                    <div className="center-box-title" style={{width: '300px', textAlign: 'center', marginBottom: '70px'}}>
                        Sign Up
                    </div>

                    <form>
                        <input id="employee_id"  className="center-box-input" placeholder="Employee ID" />
                            <div>
                                <input id="business_email" className="center-box-input" placeholder="Business Email"
                                       style={{display: 'inline-block', width: '154px', marginRight: '5px'}} />
                                    <button className="center-box-btn bg-charcoal" style={{display: 'inline-block', width: '110px'}} type="button" onClick={checkEmployee}>
                                        CONFIRM
                                    </button>
                            </div>
                            <input id="id" className="center-box-input" placeholder="ID" disabled />
                                <input id="pw" className="center-box-input" placeholder="Password" type="password" disabled />
                                    <button className="center-box-btn bg-blue" type="submit">
                                        SIGN UP
                                    </button>
                                    <a className="a-blue" href="/">Return to Login page</a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;