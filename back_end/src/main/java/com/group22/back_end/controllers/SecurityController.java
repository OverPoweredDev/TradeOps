package com.group22.back_end.controllers;

import com.group22.back_end.models.Security;
import com.group22.back_end.services.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/securities")
public class SecurityController {

    private SecurityService securityService;

    @Autowired
    public SecurityController(SecurityService securityService){
        this.securityService = securityService;
    }

    @PostMapping("/add")
    public void addSecurity(@RequestBody Security security){
        securityService.addSecurity(security);
    }

    @PutMapping("update/")
    public void updateSecurityById(@RequestBody Security security){
        securityService.updateSecurity(security);
    }

    @DeleteMapping("/delete/{securityId}")
    public void deleteSecurityById(@PathVariable int securityId){
        securityService.deleteSecurityById(securityId);
    }
}
