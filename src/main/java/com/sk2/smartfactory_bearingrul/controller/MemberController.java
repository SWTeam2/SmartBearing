package com.sk2.smartfactory_bearingrul.controller;

import com.sk2.smartfactory_bearingrul.config.jwt.JwtTokenProvider;
import com.sk2.smartfactory_bearingrul.dto.*;
import com.sk2.smartfactory_bearingrul.dto.MemberDto;
import com.sk2.smartfactory_bearingrul.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/members")
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody RequestLoginMemberDto requestLogin) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        // check
        if (authentication != null && authentication.isAuthenticated()) {
            // 사용자의 이름(username)을 가져옵니다.
            String username = authentication.getName();

            // 사용자가 가지고 있는 권한(authorities)을 가져옵니다.
            Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();

            // 권한 정보를 출력합니다.
            for (GrantedAuthority authority : authorities) {
                System.out.println(username);
                System.out.println(authority.getAuthority());
            }
        }
        return ResponseEntity.ok(memberService.login(requestLogin));
    }

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
