package com.group22.back_end.services;

import com.group22.back_end.models.Security;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import ch.qos.logback.core.net.SyslogOutputStream;
import com.group22.back_end.models.Security;
import org.springframework.stereotype.Service;

@Service
public class SecurityService {
    public List<Security> getAllSecurities() {
        return new ArrayList<>();
    }

    public List<Security> getSecuritiesByDate(LocalDate localDate) {
        return new ArrayList<>();
    }

    public List<Security> getSecuritiesByDateRange(LocalDate startDateLocal, LocalDate endDateLocal) {
        return new ArrayList<>();
    }

    public List<Security> getSecuritiesByUserId(int userId) {
        return new ArrayList<>();
    }

    public List<Security> getSecurityBySecurityId(int securityId) {
        return new ArrayList<>();
    }

    public void addSecurity(Security security){
        //TODO:add logic
    }

    public void updateSecurity(Security security) {
        //TODO : add logic
    }

    public void deleteSecurityById(int securityId) {
        //TODO: add logic
    }
}
