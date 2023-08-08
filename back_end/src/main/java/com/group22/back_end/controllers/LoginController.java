package com.group22.back_end.controllers;

import com.group22.back_end.services.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/app")
public class LoginController {
    private LoginService loginService;
    @Autowired
    public LoginController(LoginService loginService){
        this.loginService = loginService;
    }
    @PostMapping("/login")
    public Boolean doLogin(@RequestBody Map<String,String> loginDetails){
        boolean isAuthenticated = loginService.checkLoginDetails(loginDetails.get("username"),loginDetails.get("password"));
        return isAuthenticated;
    }

}
