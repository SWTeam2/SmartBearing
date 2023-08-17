package com.sk2.smartfactory_bearingrul.repository;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sk2.smartfactory_bearingrul.dto.SensorBearingDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
@RequiredArgsConstructor
@Repository
public class SensorBearingRepository {

    private final RedisTemplate<String, Object> redisTemplate;
    private final ObjectMapper objectMapper;

    private String serializeSensor(SensorBearingDto sensor) throws JsonProcessingException {
        return objectMapper.writeValueAsString(sensor);
    }

    private SensorBearingDto deserializeSensor(String value) throws JsonProcessingException {
        if (value == null) return null;
        return objectMapper.readValue(value, SensorBearingDto.class);
    }

    private String generateSensorKey(String table, Long id) {
        return "SensorBearing:" + table + ":" + id;
    }

    public void saveSensor(String table, SensorBearingDto dto) {
        String key = generateSensorKey(table, dto.getId());
        try {
            redisTemplate.opsForValue().set(key, serializeSensor(dto));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    public SensorBearingDto findSensorById(String table, Long id) {
        try {
            return deserializeSensor((String) redisTemplate.opsForValue().get(generateSensorKey(table, id)));
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    public List<SensorBearingDto> getSensorListById(String table, Long id) {
        String pattern = "SensorBearing:" + table + ":*";
        Set<String> keys = redisTemplate.keys(pattern);

        if (keys != null) {
            return keys.stream()
                    .filter(key -> {
                        String[] parts = key.split(":");
                        if (parts.length >= 3) {
                            return Long.parseLong(parts[2]) >= id;
                        }
                        return false;
                    })
                    .map(key -> {
                        try {
                            return deserializeSensor((String) redisTemplate.opsForValue().get(key));
                        } catch (JsonProcessingException e) {
                            throw new RuntimeException(e);
                        }
                    })
                    .collect(Collectors.toList());

        } else {
            return new ArrayList<>();
        }
    }
}
