package com.group22.back_end.services;

import com.group22.back_end.models.Security;
import com.group22.back_end.models.Trade;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TradeService {
    public List<Trade> getAllTrades() {
        // SELECT * FROM trade
        return new ArrayList<>();
    }

    public Trade getTradeById(int tradeId) {
        // SELECT * FROM trade t WHERE t.Id = ?1
        return new Trade();
    }

    public Security getSecurityByTradeId(int tradeId) {
        // SELECT *
        // FROM security s
        // INNER JOIN trade t ON s.Id = t.SecurityId
        // WHERE t.Id = ?1
        return new Security();
    }

    public void addTrade(Trade trade) {
        //add logic
    }

    public void updateTradeById(int tradeId) {
    }

    public void deleteTradeById(int tradeId) {
    }
}
