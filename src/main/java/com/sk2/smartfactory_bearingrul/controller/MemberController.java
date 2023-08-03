package com.sk2.smartfactory_bearingrul.controller;

import com.sk2.smartfactory_bearingrul.dto.MemberPostDto;
import com.sk2.smartfactory_bearingrul.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/signup/check-employee")
    public boolean checkRegistration(@RequestBody Map<String, String> requestData) {
        String employeeId = requestData.get("employeeId");
        String email = requestData.get("email");

        return memberService.checkRegistration(employeeId, email);
    }

    @PostMapping("/signup")
    public ResponseEntity registerMember(@RequestBody MemberPostDto memberPostDto) {
        String employeeId = memberPostDto.getEmployeeId();
        String email = memberPostDto.getEmail();
        String memberId = memberPostDto.getMemberId();
        String password = memberPostDto.getPassword();

        memberService.registerMember(employeeId, email, memberId, password);

        return new ResponseEntity<>(memberPostDto, HttpStatus.CREATED);
    }

}
