package com.sk2.smartfactory_bearingrul.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@RequiredArgsConstructor
@Controller
public class LoginController {
    @GetMapping("/")
    public String intro() {
        return "login";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }
}
