package com.sk2.smartfactory_bearingrul.controller;

import com.sk2.smartfactory_bearingrul.dto.NotificationDto;
import com.sk2.smartfactory_bearingrul.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api/dashboard/notification")
@RestController
public class NotificationController {

    private final NotificationService notificationService;

//    @PostMapping
//    public ResponseEntity<String> postNotification(@RequestBody long predictionId) {
//        notificationService.postNotificationByPrediction(predictionId);
//        return ResponseEntity.ok("Notification posted.");
//    }
    @GetMapping()
    public ResponseEntity<List<NotificationDto>> getAllNotifications() {
        List<NotificationDto> notifications = notificationService.getAllNotifications();
        return ResponseEntity.ok(notifications);
    }
}