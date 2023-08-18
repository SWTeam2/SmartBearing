package com.sk2.smartfactory_bearingrul.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.sk2.smartfactory_bearingrul.dto.PredictionBearingDto;
import com.sk2.smartfactory_bearingrul.dto.SensorBearingDto;
import com.sk2.smartfactory_bearingrul.service.BearingService;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/bearing")
public class BearingController {

    private final RestTemplate restTemplate = new RestTemplate();
    private final BearingService bearingService;

    @ApiOperation(value = "센서 데이터 조회", notes = "table과 id를 입력 받아 해당 table에서 입력 받은 id 이후의 sensor data를 불러옵니다.")
    @GetMapping("/sensor/{table}/{id}")
    public ResponseEntity<List<SensorBearingDto>> getSensorData(@PathVariable String table, @PathVariable String id) throws JsonProcessingException {
        // API 호출
        String apiUrl = "https://win1.i4624.tk/data/test_table_" + table.toLowerCase().replace(" ", "") + "/" + id;
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            bearingService.saveSensor(table, response.getBody()); // redis 저장
            return ResponseEntity.ok().body(bearingService.parsingSensor(response.getBody())); // API response 값을 List 형태로 변경하여 return
        } else {
            return ResponseEntity.status(response.getStatusCode()).build();
        }
    }

    @ApiOperation(value = "예측 데이터 조회", notes = "table과 id를 입력 받아 해당 table에서 입력 받은 id 이후의 prediction data를 불러옵니다.")
    @GetMapping("/prediction/{table}/{id}")
    public ResponseEntity<List<PredictionBearingDto>> getPredictionData(@PathVariable String table, @PathVariable String id) throws JsonProcessingException {
        // API 호출
        String apiUrl = "https://win1.i4624.tk/output/prediction_table_" + table.toLowerCase().replace(" ", "") + "/" + id;
        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            bearingService.savePrediction(table, response.getBody()); // redis 저장
            return ResponseEntity.ok().body(bearingService.parsingPrediction(response.getBody())); // API response 값을 List 형태로 변경하여 return
        } else {
            return ResponseEntity.status(response.getStatusCode()).build();
        }
    }
}
