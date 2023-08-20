-- Employee
INSERT INTO Employee (employee_id, name, birthday, gender, phone, email, department, position, in_charge)
VALUES ('1001', '홍길동', '2001-01-01', 'M', '010-0000-0000', 'hgd@gmail.com', '데이터 1팀', '관리자', 'Bearing 1_1');
INSERT INTO Employee (employee_id, name, birthday, gender, phone, email, department, position, in_charge)
VALUES ('1002', '홍길순', '2001-01-02', 'M', '010-0000-0001', 'hgs@gmail.com', '데이터 1팀', '사원', 'Bearing 1_2');
INSERT INTO Employee (employee_id, name, birthday, gender, phone, email, department, position, in_charge)
VALUES ('1003', '김미미', '2001-01-03', 'F', '010-0000-0002', 'kmm@gmail.com', '데이터 2팀', '사원', 'Bearing 1_3');

-- Member
INSERT INTO Member (employee_id, member_id, password, created_at)
VALUES ('1001', 'hgd', '1234', now());
INSERT INTO Member (employee_id, member_id, password, created_at)
VALUES ('1002', 'hgs', '12345', now());
