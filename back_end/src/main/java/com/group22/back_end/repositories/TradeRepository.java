package com.group22.back_end.repositories;


import com.group22.back_end.models.Security;
import com.group22.back_end.models.Trade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository

public interface TradeRepository extends JpaRepository<Trade,Integer> {


    @Query("SELECT t FROM Trade t WHERE t.id = ?1")
    List<Trade> findTradeById(int tradeId);

//    @Query("SELECT s FROM security s INNER JOIN trade t ON s.Id = t.SecurityId WHERE t.Id = ?1")
//    List<Security>findSecurityByTradeId(int tradeId);
}
