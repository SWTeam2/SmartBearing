function checkEmployee() {
    let check = false; // API 반환값

    if (check == true) {
        alert('일치하는 사원 정보가 존재합니다.')
        let id = document.getElementById('signup_id');
        let pw = document.getElementById('signup_password');
        id.disabled = false;
        pw.disabled = false;
    } else {
        alert('일치하는 사원 정보가 존재하지 않습니다.')
    }
}

function login() {
    // 로그인 과정 수행
    window.location.href = '/dashboard';
}

function logout() {
    // 로그아웃 과정 수행
    window.location.href = '/login';
}