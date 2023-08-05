package com.sk2.smartfactory_bearingrul.controller;

import com.sk2.smartfactory_bearingrul.dto.RequestLoginMemberDto;
import com.sk2.smartfactory_bearingrul.dto.RequestSignupMemberDto;
import com.sk2.smartfactory_bearingrul.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody RequestLoginMemberDto requestLogin) {
        return ResponseEntity.ok(memberService.login(requestLogin));
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpServletRequest servletRequest) {
        memberService.logout();
        return ResponseEntity.ok().build();
    }

    @PostMapping("/signup/check-employee")
    public ResponseEntity<Boolean> checkRegistration(@RequestBody RequestSignupMemberDto requestSignup) {
        String employeeId = requestSignup.getEmployeeId();
        String email = requestSignup.getEmail();
        Boolean checkRegistration = memberService.checkRegistration(employeeId, email);
        if (checkRegistration) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity registerMember(@RequestBody RequestSignupMemberDto requestSignup) {
        memberService.registerMember(requestSignup);
        return new ResponseEntity<>(requestSignup, HttpStatus.CREATED);
    }

    @PostMapping("/signup/is-duplicated")
    public ResponseEntity<Boolean> isDuplicated(@RequestBody RequestSignupMemberDto requestSignup) {
        String memberId = requestSignup.getMemberId();
        boolean isDuplicated =  memberService.isDuplicated(memberId);
        if (isDuplicated) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }

    @PostMapping("/signup/is-existed")
    public ResponseEntity<Boolean> isExisted(@RequestBody RequestSignupMemberDto requestSignup) {
        String employeeId = requestSignup.getEmployeeId();
        boolean isExisted = memberService.isExisted(employeeId);
        if (isExisted) {
            return ResponseEntity.ok(true);
        } else {
            return ResponseEntity.ok(false);
        }
    }
}
