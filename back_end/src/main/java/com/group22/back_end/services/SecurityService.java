package com.group22.back_end.services;

import com.group22.back_end.models.Security;
import com.group22.back_end.repositories.SecurityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class SecurityService {
    @Autowired
    private SecurityRepository securityRepository;

    public List<Security> getAllSecurities() {
        return securityRepository.findAll();
    }

    public List<Security> getSecuritiesByDate(LocalDate localDate) {
        Date date = Date.valueOf(localDate);
        return securityRepository.findSecuritiesByDate(date);
    }

    public List<Security> getSecuritiesByDateRange(LocalDate startDateLocal, LocalDate endDateLocal) {
        Date startDate = Date.valueOf(startDateLocal);
        Date endDate = Date.valueOf(endDateLocal);
        return securityRepository.findSecuritiesByDateRange(startDate, endDate);
    }

    public List<Security> getSecuritiesByUserId(int userId) {
        return securityRepository.findSecuritiesByUserId(userId);
    }

    public List<Security> getSecurityBySecurityId(int securityId) {
        return securityRepository.findSecuritiesBySecurityId(securityId);
    }

    public Security addSecurity(Security security) {
        return securityRepository.save(security);
    }

    public void updateSecurity(Security security) {
        Security securityToUpdate = securityRepository.getById(security.getSecurityId());

        securityToUpdate.setIsin(security.getIsin());
        securityToUpdate.setCusip(security.getCusip());
        securityToUpdate.setIssuer(security.getIssuer());
        securityToUpdate.setMaturityDate(security.getMaturityDate());
        securityToUpdate.setCoupon(security.getCoupon());
        securityToUpdate.setSecurityType(security.getSecurityType());
        securityToUpdate.setFaceValue(security.getFaceValue());
        securityToUpdate.setStatus(security.getStatus());

        securityRepository.save(securityToUpdate);
    }

    public void deleteSecurityById(int securityId) {
        Security securityToDelete = securityRepository.getById(securityId);
        securityRepository.delete(securityToDelete);
    }
}
