package com.group22.back_end.services;

import com.group22.back_end.models.Security;
import com.group22.back_end.models.Trade;
import com.group22.back_end.repositories.TradeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TradeService {

    @Autowired
    private TradeRepository tradeRepository;

    public List<Trade> getAllTrades() {
        // SELECT * FROM trade
        return tradeRepository.findAll();
    }

    public List<Trade> getTradeById(int tradeId) {
        // SELECT * FROM trade t WHERE t.Id = ?1
        return tradeRepository.findTradeById(tradeId);

    }

    public List<Security> getSecurityByTradeId(int tradeId) {
        // SELECT * FROM security s INNER JOIN trade t ON s.SecurityId = t.SecurityId WHERE t.Id = ?1
        return tradeRepository.findSecurityByTradeId(tradeId);
    }

    public Trade addTrade(Trade trade) {
        return tradeRepository.save(trade);
    }

    public void updateTrade(Trade trade) {
        Trade tradeToUpdate=tradeRepository.getById(trade.getId());

        tradeToUpdate.setBookId(trade.getBookId());
        tradeToUpdate.setCounterpartyId(trade.getCounterpartyId());
        tradeToUpdate.setSecurityId(trade.getSecurityId());
        tradeToUpdate.setQuantity(trade.getQuantity());
        tradeToUpdate.setPrice(trade.getPrice());
        tradeToUpdate.setBuySell(trade.getBuySell());
        tradeToUpdate.setTradeDate(trade.getTradeDate());
        tradeToUpdate.setSettlementDate(trade.getSettlementDate());

    }

    public void deleteTradeById(int tradeId) {
        Trade tradeToDelete=tradeRepository.getById(tradeId);
        tradeRepository.delete(tradeToDelete);
    }
}
