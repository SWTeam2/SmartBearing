package com.sk2.smartfactory_bearingrul.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sk2.smartfactory_bearingrul.dto.SensorBearingDto;
import com.sk2.smartfactory_bearingrul.repository.SensorBearingRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BearingService {

    private final SensorBearingRepository sensorBearingRepository;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public List<SensorBearingDto> parsingSensor(String data) throws JsonProcessingException {
        return objectMapper.readValue(data, new TypeReference<List<SensorBearingDto>>() {});
    }

    public void saveSensor(String table, String data) throws JsonProcessingException {
        List<SensorBearingDto> sensorDataList = parsingSensor(data); // 리스트로 변환
        sensorDataList.forEach(sensorData -> sensorBearingRepository.saveSensor(table, sensorData)); // 각 dto를 reids에 저장
    }
}