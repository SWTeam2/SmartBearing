package com.sk2.smartfactory_bearingrul.dto;

import com.sk2.smartfactory_bearingrul.entity.Member;
import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginMemberDto implements UserDetails {

    private String employeeId;
    private String memberId;
    private String password;
    private LocalDateTime createAt;
    private String position;
    private static final String ROLE_PREFIX = "ROLE_";

    public Member toEntity() {
        return Member.builder()
                .employeeId(employeeId)
                .memberId(memberId)
                .password(password)
                .createdAt(createAt)
                .build();
    }

    public static LoginMemberDto from(Member entity, String position) {
        return LoginMemberDto.builder()
                .employeeId(entity.getEmployeeId())
                .memberId(entity.getMemberId())
                .password(entity.getPassword())
                .createAt(entity.getCreatedAt())
                .position(position)
                .build();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Collection<GrantedAuthority> authorities = new ArrayList<>();

        // Check the position and add corresponding role
        if ("관리자".equals(position)) {
            authorities.add(new SimpleGrantedAuthority(ROLE_PREFIX + "ADMIN"));
        } else {
            authorities.add(new SimpleGrantedAuthority(ROLE_PREFIX + "USER"));
        }

        return authorities;
    }

    @Override
    public String getUsername() {
        return memberId;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
