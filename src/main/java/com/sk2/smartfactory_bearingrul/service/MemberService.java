package com.sk2.smartfactory_bearingrul.service;

import com.sk2.smartfactory_bearingrul.config.jwt.JwtTokenProvider;
import com.sk2.smartfactory_bearingrul.dto.MemberDto;
import com.sk2.smartfactory_bearingrul.dto.RequestLoginMemberDto;
import com.sk2.smartfactory_bearingrul.dto.RequestSignupMemberDto;
import com.sk2.smartfactory_bearingrul.entity.Employee;
import com.sk2.smartfactory_bearingrul.entity.Member;
import com.sk2.smartfactory_bearingrul.repository.EmployeeRepository;
import com.sk2.smartfactory_bearingrul.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final EmployeeRepository employeeRepository;
    private final MemberRepository memberRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final BCryptPasswordEncoder passwordEncoder;

    @Transactional
    public String login(RequestLoginMemberDto requestLogin) {
        Member member = memberRepository.findByMemberId(requestLogin.getMemberId())
                .orElseThrow(() -> new IllegalArgumentException("사원을 찾을 수 없습니다."));

        if (!passwordEncoder.matches(requestLogin.getPassword(), member.getPassword()))
            throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");

        return jwtTokenProvider.createToken(member.getMemberId());
    }

    public void registerMember(RequestSignupMemberDto requestSignup) {
        // 주어진 employeeId와 email로 Employee 테이블에서 확인
        Employee employee = employeeRepository.findByEmployeeIdAndEmail(
                requestSignup.getEmployeeId(), requestSignup.getEmail());
        if (employee != null) {
            // 새 Member 객체를 생성
            Member member = Member.builder()
                    .employeeId(requestSignup.getEmployeeId())
                    .memberId(requestSignup.getMemberId())
                    .password(passwordEncoder.encode(requestSignup.getPassword()))
                    .build();

            // member를 Member 테이블에 저장
            memberRepository.save(member);
        } else {
            // Employee 테이블에서 employeeId와 email이 일치하지 않는 경우 처리
            throw new IllegalArgumentException("사원을 찾을 수 없습니다.");
        }
    }

    public boolean checkRegistration(String employeeId, String email) {
        return employeeRepository.existsByEmployeeIdAndEmail(employeeId, email);
    }

    public boolean isDuplicated(String memberId) {
        return memberRepository.existsByMemberId(memberId);
    }

    public boolean isExisted(String employeeId) {
        return memberRepository.existsByEmployeeId(employeeId);
    }
}
