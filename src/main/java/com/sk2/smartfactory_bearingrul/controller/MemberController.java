package com.sk2.smartfactory_bearingrul.controller;

//import com.sk2.smartfactory_bearingrul.mapper.MemberMapper;
import com.sk2.smartfactory_bearingrul.entity.Employee;
import com.sk2.smartfactory_bearingrul.repository.EmployeeRepository;
import com.sk2.smartfactory_bearingrul.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
public class MemberController {

    private final EmployeeRepository employeeRepository;
    private final MemberService memberService;
//    private final MemberMapper memberMapper;

    @Autowired
    public MemberController(EmployeeRepository employeeRepository, MemberService memberService) {
        this.employeeRepository = employeeRepository;
        this.memberService = memberService;
//        this.memberMapper = memberMapper;
    }

    @PostMapping("/signup/check-employee")
    public boolean checkRegistration(@RequestBody Map<String, String> requestData) {
        String employeeId = requestData.get("employeeId");
        String email = requestData.get("email");

        return employeeRepository.existsByEmployeeIdAndEmail(employeeId, email);
    }
    @PostMapping("/signup/post-member")
    public void postMember(@RequestBody Map<String, String> requestData) {
        String employeeId = requestData.get("employeeId");
        String email = requestData.get("email");
        String memberId = requestData.get("memberId");
        String password = requestData.get("password");

        memberService.registerMember(employeeId, email, memberId, password);
    }


}
