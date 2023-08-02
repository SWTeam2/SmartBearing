package com.sk2.smartfactory_bearingrul.dto;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    private String employeeId;
    private String name;
    private LocalDate birthday;
    private String gender;
    private String phone;
    private String email;
    private String department;
    private String position;
}
