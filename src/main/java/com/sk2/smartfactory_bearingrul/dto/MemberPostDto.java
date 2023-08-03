package com.sk2.smartfactory_bearingrul.dto;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class MemberPostDto {
    private String employeeId;
    private String email;
    private String memberId;
    private String password;
}
