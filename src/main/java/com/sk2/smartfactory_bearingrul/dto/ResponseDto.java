package com.sk2.smartfactory_bearingrul.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDto<T> {
    private String error;
    private List<T> data;
}
