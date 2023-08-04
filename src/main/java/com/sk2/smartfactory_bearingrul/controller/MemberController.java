package com.sk2.smartfactory_bearingrul.controller;

import com.sk2.smartfactory_bearingrul.dto.MemberDto;
import com.sk2.smartfactory_bearingrul.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/signup/check-employee")
    public ResponseEntity<Boolean> checkRegistration(@RequestBody MemberDto memberDto) {
        String employeeId = memberDto.getEmployeeId();
        String email = memberDto.getEmail();
        Boolean checkRegistration = memberService.checkRegistration(employeeId, email);
        if (checkRegistration) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity registerMember(@RequestBody MemberDto memberDto) {
        memberService.registerMember(memberDto);
        return new ResponseEntity<>(memberDto, HttpStatus.CREATED);
    }

    @PostMapping("/signup/is-duplicated")
    public ResponseEntity<Boolean> isDuplicated(@RequestBody MemberDto memberDto) {
        String memberId = memberDto.getMemberId();
        boolean isDuplicated =  memberService.isDuplicated(memberId);
        if (isDuplicated) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }

    @PostMapping("/signup/is-existed")
    public ResponseEntity<Boolean> isExisted(@RequestBody MemberDto memberDto) {
        String employeeId = memberDto.getEmployeeId();
        boolean isExisted = memberService.isExisted(employeeId);
        if (isExisted) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }
}
