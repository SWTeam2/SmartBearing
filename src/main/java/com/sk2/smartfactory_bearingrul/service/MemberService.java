package com.sk2.smartfactory_bearingrul.service;

import com.sk2.smartfactory_bearingrul.dto.MemberPostDto;
import com.sk2.smartfactory_bearingrul.entity.Employee;
import com.sk2.smartfactory_bearingrul.entity.Member;
import com.sk2.smartfactory_bearingrul.repository.EmployeeRepository;
import com.sk2.smartfactory_bearingrul.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class MemberService {

    private final EmployeeRepository employeeRepository;
    private final MemberRepository memberRepository;

    public MemberService(EmployeeRepository employeeRepository, MemberRepository memberRepository) {
        this.employeeRepository = employeeRepository;
        this.memberRepository = memberRepository;
    }

    public void registerMember(MemberPostDto memberPostDto) {
        // 주어진 employeeId와 email로 Employee 테이블에서 확인
        Employee employee = employeeRepository.findByEmployeeIdAndEmail(
                memberPostDto.getEmployeeId(), memberPostDto.getEmail());
        if (employee != null) {
            // 새 Member 객체를 생성
            Member member = Member.builder()
                    .employeeId(memberPostDto.getEmployeeId())
                    .memberId(memberPostDto.getMemberId())
                    .password(memberPostDto.getPassword())
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
