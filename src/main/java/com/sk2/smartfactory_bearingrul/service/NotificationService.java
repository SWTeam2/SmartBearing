package com.sk2.smartfactory_bearingrul.service;

import com.sk2.smartfactory_bearingrul.dto.NotificationDto;
import com.sk2.smartfactory_bearingrul.entity.Notification;
import com.sk2.smartfactory_bearingrul.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class NotificationService {

    private final NotificationRepository notificationRepository;

    public List<NotificationDto> getAllNotifications() {
        List<Notification> notifications = notificationRepository.findAll();
        return notifications.stream()
                .map(NotificationDto::from)
                .collect(Collectors.toList());
    }

    public void check(Double prediction) {
        if (prediction != null) {
            String range;
            if (prediction < 0.4) {
                range = "Low";
            } else if (prediction < 0.7) {
                range = "Medium";
            } else {
                range = "High";
            }
            Notification notification = Notification.builder()
                    .prediction(prediction)
                    .build();
        }
    }
    public void postNotification(Notification notification) {
        
    }
}