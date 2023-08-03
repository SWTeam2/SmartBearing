package com.sk2.smartfactory_bearingrul.controller;

import com.sk2.smartfactory_bearingrul.dto.MemberPostDto;
import com.sk2.smartfactory_bearingrul.entity.Employee;
import com.sk2.smartfactory_bearingrul.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.Value;
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
    public ResponseEntity<Boolean> checkRegistration(@RequestBody MemberPostDto memberPostDto) {
        String employeeId = memberPostDto.getEmployeeId();
        String email = memberPostDto.getEmail();
        Boolean checkRegistration = memberService.checkRegistration(employeeId, email);
        if (checkRegistration) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity registerMember(@RequestBody MemberPostDto memberPostDto) {
        memberService.registerMember(memberPostDto);
        return new ResponseEntity<>(memberPostDto, HttpStatus.CREATED);
    }

    @PostMapping("/signup/is-duplicated")
    public ResponseEntity<Boolean> isDuplicated(@RequestBody MemberPostDto memberPostDto) {
        String memberId = memberPostDto.getMemberId();
        boolean isDuplicated =  memberService.isDuplicated(memberId);
        if (isDuplicated) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }

    @PostMapping("/signup/is-existed")
    public ResponseEntity<Boolean> isExisted(@RequestBody MemberPostDto memberPostDto) {
        String employeeId = memberPostDto.getEmployeeId();
        boolean isExisted = memberService.isExisted(employeeId);
        if (isExisted) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }
}
