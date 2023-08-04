function checkEmployee() {
    const requestData = {
        employeeId: $('#employee_id').val(),
        email: $('#business_email').val()
    };

    $.ajax({
        method: "POST",
        url: "/api/members/signup/check-employee",
        contentType: "application/json",
        data: JSON.stringify(requestData),
        success: function (response) {
            if (response === true) {
                alert('일치하는 사원 정보가 존재합니다.')

                $('#id').prop('disabled', false);
                $('#pw').prop('disabled', false);
            } else {
                alert('일치하는 사원 정보가 존재하지 않습니다.')
            }
        },
        error: function () {
            alert("사원 확인 중 오류가 발생했습니다.");
        }
    });
}

function login() {
    window.location.href = "/dashboard";
}

function login1() {
    const requestData = {
        memberId: $("#id").val(),
        password: $("#password").val()
    };

    $.ajax({
        method: "POST",
        url: "/api/members/login",
        contentType: "application/json",
        data: JSON.stringify(requestData),
        success: function (response) {
            // 서버로부터 반환된 JWT 토큰 값을 추출하여 jwtToken 변수에 저장
            const jwtToken = response;

            // 이후의 코드는 동일하게 유지
            $.ajax({
                method: "GET",
                url: "/dashboard",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("Authorization", "Bearer " + jwtToken);
                },
                success: function (response) {
                    console.log(response);
                    // '/dashboard' 페이지를 성공적으로 불러왔을 때의 처리
                },
                error: function (response) {
                    console.log(response);
                    // Handle error response
                }
            });
        },
        error: function (response) {
            console.log(response);
            // Handle error response
        }
    });
}

function logout() {
    // 로그아웃 과정 수행
    window.location.href = '/';
}