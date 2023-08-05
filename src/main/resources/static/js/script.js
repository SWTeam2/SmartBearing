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
            const jwtToken = response;
            localStorage.setItem('token', jwtToken);

            $.ajax({
                method: "GET",
                url: "/dashboard",
                beforeSend: function (xhr) {
                    xhr.setRequestHeader("X-AUTH-TOKEN", localStorage.getItem('token'));
                },
                success: function (response) {
                    console.log(response);
                },
                error: function (response) {
                    console.log(response);
                }
            });
        },
        error: function (response) {
            console.log(response);
        }
    });
}

function logout() {
    $.ajax({
        method: "POST",
        url: "/api/members/logout",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("X-AUTH-TOKEN", localStorage.getItem('token'));
        },
        success: function (response) {
            location.href = "/";
        },
        error: function (response) {
            console.log(response);
        }
    });
}