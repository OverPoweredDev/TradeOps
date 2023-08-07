package com.group22.back_end.controllers;

import com.group22.back_end.exception.ResourceNotFoundException;
import com.group22.back_end.models.Security;
import com.group22.back_end.services.SecurityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;

@RestController
@RequestMapping("/securities")
public class SecurityController {
    private SecurityService securityService;

    @Autowired
    public SecurityController(SecurityService securityService) {
        this.securityService = securityService;
    }

    @GetMapping(value = "get")
    public ResponseEntity getSecurities() {
        System.out.println("/securities/get: retrieving all securities");

        List<Security> response = securityService.getAllSecurities();
        return ResponseEntity.ok().body(response);
    }

    @GetMapping(value = "get", params = "date")
    public ResponseEntity getSecuritiesByDate(@RequestParam(value = "date") String date) {
        System.out.println("/securities/get?date: retrieving securities by date");

        if (!isDateValid(date)) {
            return ResponseEntity.badRequest().body("Format date as yyyy-MM-dd");
        }

        LocalDate localDate = LocalDate.parse(date);
        List<Security> response = securityService.getSecuritiesByDate(localDate);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping(value = "get", params = {"startDate", "endDate"})
    public ResponseEntity getSecuritiesByDateRange(@RequestParam(value = "startDate") String startDate, @RequestParam(value = "endDate") String endDate) {
        if (startDate != null && endDate != null && isDateValid(startDate) && isDateValid(endDate)) {
            System.out.println("/securities/get?startDate&endDate: retrieving securities by date range");
            LocalDate startDateLocal = LocalDate.parse(startDate);
            LocalDate endDateLocal = LocalDate.parse(endDate);

            if(startDateLocal.isAfter(endDateLocal)) {
                return ResponseEntity.badRequest().body("start date must be before end date");
            }

            List<Security> response = securityService.getSecuritiesByDateRange(startDateLocal, endDateLocal);
            return ResponseEntity.ok().body(response);
        }

        if (startDate != null && isDateValid(startDate)) {
            System.out.println("/securities/get?startDate&endDate: retrieving securities by start date");
            LocalDate localDate = LocalDate.parse(startDate);
            List<Security> response = securityService.getSecuritiesByDate(localDate);
            return ResponseEntity.ok().body(response);
        }

        if (endDate != null && isDateValid(endDate)) {
            System.out.println("/securities/get?startDate&endDate: retrieving securities by end date");
            LocalDate localDate = LocalDate.parse(endDate);
            List<Security> response = securityService.getSecuritiesByDate(localDate);
            return ResponseEntity.ok().body(response);
        }

        return ResponseEntity.badRequest().body("Require both startDate and endDate in yyyy-MM-dd");
    }

    @GetMapping(value = "get", params = "userId")
    public ResponseEntity getSecuritiesByUserId(@RequestParam(value = "userId") int userId) {
        System.out.println("/securities/get?userId: retrieving securities by user");

        List<Security> response = securityService.getSecuritiesByUserId(userId);
        return ResponseEntity.ok().body(response);
    }

    @GetMapping(value = "get", params = "securityId")
    public ResponseEntity getSecurityBySecurityId(@RequestParam(value = "securityId") int securityId) {
        System.out.println("/securities/get?securityId: retrieving securities by id");

        List<Security> response = securityService.getSecurityBySecurityId(securityId);
        return ResponseEntity.ok().body(response);
    }

    private boolean isDateValid(String date) {
        try {
            LocalDate.parse(date);
        } catch (DateTimeParseException dateTimeParseException) {
            return false;
        }

        return true;
    }

    @PostMapping("/add")
    public Security addSecurity(@RequestBody Security security) {
        return securityService.addSecurity(security);
    }

    @PutMapping("update/")
    public void updateSecurityById(@RequestBody Security security) throws ResourceNotFoundException {
        securityService.updateSecurity(security);
    }

    @DeleteMapping("/delete/{securityId}")
    public void deleteSecurityById(@PathVariable int securityId) throws ResourceNotFoundException{
        securityService.deleteSecurityById(securityId);
    }
}
