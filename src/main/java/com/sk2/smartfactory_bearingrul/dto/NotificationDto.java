package com.sk2.smartfactory_bearingrul.dto;
import com.sk2.smartfactory_bearingrul.entity.Notification;
import lombok.*;
import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class NotificationDto {
    private long notificationId;
    private double prediction;
    private LocalDateTime inferTime;
    private LocalDateTime createdAt;

    public static NotificationDto from(Notification entity) {
        return NotificationDto.builder()
                .notificationId(entity.getNotificationId())
                .prediction(entity.getPrediction())
                .inferTime(entity.getInferTime())
                .createdAt(entity.getCreatedAt())
                .build();
    }

    public Notification toEntity() {
        return Notification.builder()
                .notificationId(notificationId)
                .prediction(prediction)
                .inferTime(inferTime)
                .createdAt(createdAt)
                .build();
    }
}