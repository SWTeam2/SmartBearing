package com.sk2.smartfactory_bearingrul.repository;

import com.sk2.smartfactory_bearingrul.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, String> {
    boolean existsByEmployeeIdAndEmail(String employeeId, String email);

    // employeeId로 Employee를 찾는 메서드
    Employee findByEmployeeIdAndEmail(String employeeId, String email);
}
