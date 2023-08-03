package com.sk2.smartfactory_bearingrul.dto;

import com.sk2.smartfactory_bearingrul.entity.Member;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginMemberDto {
    private String token;
    private String employeeId;
    private String memberId;
    private String password;
    private LocalDateTime createdAt;

    public static LoginMemberDto from(Member entity, String token) {
        return LoginMemberDto.builder()
                .token(token)
                .employeeId(entity.getEmployeeId())
                .memberId(entity.getMemberId())
                .password(entity.getPassword())
                .createdAt(entity.getCreatedAt())
                .build();
    }

    public Member toEntity() {
        return Member.builder()
                .employeeId(employeeId)
                .memberId(memberId)
                .password(password)
                .createdAt(createdAt)
                .build();
    }
}
