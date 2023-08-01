package com.sk2.smartfactory_bearingrul.controller;

import com.sk2.smartfactory_bearingrul.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class MemberController {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public MemberController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @PostMapping("/signup/check-employee")
    public boolean checkRegistration(@RequestBody Map<String, String> requestData) {
        String employeeId = requestData.get("employeeId");
        String email = requestData.get("email");

        boolean exists = employeeRepository.existsByEmployeeIdAndEmail(employeeId, email);

        if (exists) {
            return true;
        } else {
            return false;
        }
    }
}
