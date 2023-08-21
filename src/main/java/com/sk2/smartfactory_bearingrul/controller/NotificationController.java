package com.sk2.smartfactory_bearingrul.controller;

import com.sk2.smartfactory_bearingrul.dto.NotificationDto;
import com.sk2.smartfactory_bearingrul.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api/notification")
@RestController
public class NotificationController {

    private final NotificationService notificationService;

    @GetMapping("/countAfter/{createdAt}")
    public ResponseEntity<Long> getCountByCreatedAt(@PathVariable String createdAt) {
        return ResponseEntity.ok(notificationService.getCountNewNoti(createdAt));
    }
}