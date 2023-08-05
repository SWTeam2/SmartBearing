package com.sk2.smartfactory_bearingrul.service;

import com.sk2.smartfactory_bearingrul.dto.EmployeeDto;
import com.sk2.smartfactory_bearingrul.entity.Employee;
import com.sk2.smartfactory_bearingrul.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public void registerEmployee(EmployeeDto employeeDto) {
        if (employeeRepository.existsByEmployeeId(employeeDto.getEmployeeId())) {
            throw new IllegalStateException("중복된 사원번호입니다.");
        }

        employeeRepository.save(employeeDto.toEntity());
    }

    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(EmployeeDto::from).collect(Collectors.toList());
    }

    public void deleteEmployee(String employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사원입니다."));

        employeeRepository.delete(employee);
    }

    public void updateEmployee(String employeeId, EmployeeDto updateEmployeeDto) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 사원입니다."));

        EmployeeDto employeeDto = EmployeeDto.from(employee);
        employeeDto.updateFields(updateEmployeeDto);

        employeeRepository.save(employeeDto.toEntity());
    }
}