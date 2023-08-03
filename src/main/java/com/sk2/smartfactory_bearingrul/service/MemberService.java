package com.sk2.smartfactory_bearingrul.service;

import com.sk2.smartfactory_bearingrul.config.jwt.JwtTokenProvider;
import com.sk2.smartfactory_bearingrul.dto.MemberDto;
import com.sk2.smartfactory_bearingrul.entity.Employee;
import com.sk2.smartfactory_bearingrul.entity.Member;
import com.sk2.smartfactory_bearingrul.repository.EmployeeRepository;
import com.sk2.smartfactory_bearingrul.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final EmployeeRepository employeeRepository;
    private final MemberRepository memberRepository;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final JwtTokenProvider jwtTokenProvider;

    public MemberDto findByMemberIdAndPassword(String memberId, String password) {
        return memberRepository.findByMemberIdAndPassword(memberId, password).map(MemberDto::from).orElse(null);
    }

    public void registerMember(MemberDto memberDto) {
        // 주어진 employeeId와 email로 Employee 테이블에서 확인
        Employee employee = employeeRepository.findByEmployeeIdAndEmail(
                memberDto.getEmployeeId(), memberDto.getEmail());
        if (employee != null) {
            // 새 Member 객체를 생성
            Member member = Member.builder()
                    .employeeId(memberDto.getEmployeeId())
                    .memberId(memberDto.getMemberId())
                    .password(memberDto.getPassword())
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
