package com.sk2.smartfactory_bearingrul.repository;

import com.sk2.smartfactory_bearingrul.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, String> {


}