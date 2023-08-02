function checkEmployee() {
    let employeeId = $('#employee_id');
    let email = $('#business_email');
    let id = $('#id');
    let pw = $('#pw');

    const requestData = {
        employeeId: employeeId.val(),
        email: email.val()
    };

    $.ajax({
        type: "POST",
        url: "/signup/check-employee",
        contentType: "application/json",
        data: JSON.stringify(requestData),
        success: function(response) {
            if (response === true) {
                alert('일치하는 사원 정보가 존재합니다.')
                id.prop('disabled', false);
                pw.prop('disabled', false);
            } else {
                alert('일치하는 사원 정보가 존재하지 않습니다.')
            }
        },
        error: function() {
            alert("사원 확인 중 오류가 발생했습니다.");
        }
    });
}

function login() {
    // 로그인 과정 수행
    window.location.href = '/dashboard';
}

function logout() {
    // 로그아웃 과정 수행
    window.location.href = '/login';
}