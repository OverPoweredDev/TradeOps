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
        // SELECT * FROM security
        return new ArrayList<>();
    }

    public List<Security> getSecuritiesByDate(LocalDate localDate) {
        // convert date to ISO string
        // SELECT * FROM security s WHERE s.date = ?1
        return new ArrayList<>();
    }

    public List<Security> getSecuritiesByDateRange(LocalDate startDateLocal, LocalDate endDateLocal) {
        // convert date to ISO string
        // SELECT * FROM security s WHERE s.date >= ?1 AND s.date <= ?2
        return new ArrayList<>();
    }

    public List<Security> getSecuritiesByUserId(int userId) {
        // SELECT s.*
        // FROM security s
        // INNER JOIN trade t ON t.SecurityId = s.Id
        // INNER JOIN bookuser bu ON b.BookId = t.BookId
        // WHERE bu.UserId = ?1
        return new ArrayList<>();
    }

    public List<Security> getSecurityBySecurityId(int securityId) {
        // SELECT * FROM security s WHERE s.Id = ?1
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
