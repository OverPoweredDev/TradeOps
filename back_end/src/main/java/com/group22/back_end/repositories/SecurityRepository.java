package com.group22.back_end.repositories;

import com.group22.back_end.models.Security;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.util.List;

@Repository
public interface SecurityRepository extends JpaRepository<Security, Integer> {
    @Query(value = "SELECT s FROM Security s WHERE s.maturityDate = ?1 ")
    List<Security> findSecuritiesByDate(Date date);

    @Query(value = "SELECT s FROM Security s WHERE s.maturityDate >= ?1 AND s.maturityDate <= ?2")
    List<Security> findSecuritiesByDateRange(Date startDate, Date endDate);

    @Query(value = "SELECT s FROM Security s INNER JOIN Trade t ON t.securityId = s.securityId INNER JOIN BookUser bu ON bu.bookId = t.bookId WHERE bu.userId = ?1")
    List<Security> findSecuritiesByUserId(int userId);

    @Query(value = "SELECT s FROM Security s WHERE s.securityId = ?1")
    List<Security> findSecuritiesBySecurityId(int securityId);

    @Query(value = "SELECT COUNT(s) FROM Security s WHERE ?1 >= s.maturityDate")
    int findSecuritiesAboutToMatureByDate(Date date);

    @Query(value = "SELECT COUNT(s) FROM Security s WHERE s.maturityDate < ?1")
    int findSecuritiesPastMaturityByDate(Date date);
}
