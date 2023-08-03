package com.sk2.smartfactory_bearingrul.repository;

import com.sk2.smartfactory_bearingrul.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, String> {
    // employeeId를 Member table에서 찾는 메서드
    boolean existsByEmployeeId(String employeeId);
    // memberId를 Member table에서 찾는 메서드
    boolean existsByMemberId(String memberId);

}