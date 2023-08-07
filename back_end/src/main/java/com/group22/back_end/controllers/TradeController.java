package com.group22.back_end.controllers;

import com.group22.back_end.models.Security;
import com.group22.back_end.models.Trade;
import com.group22.back_end.services.TradeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController()
@RequestMapping("/trades")
public class TradeController {

    private TradeService tradeService;

    @Autowired
    public TradeController(TradeService tradeService) {
        this.tradeService = tradeService;
    }

    @GetMapping("/get")
    public ResponseEntity<List<Trade>> getAllTrades() {
        System.out.println("/trades/get: retrieving all trades");
        List<Trade> trades = tradeService.getAllTrades();
        return ResponseEntity.ok(trades);
    }

    @GetMapping("get/{tradeId}")
    public ResponseEntity<Trade> getTradeById(@PathVariable int tradeId) {
        System.out.println("/trades/get?Id: retrieving a by Id");
        Trade trade = tradeService.getTradeById(tradeId);
        return ResponseEntity.ok(trade);
    }

    @GetMapping("get/security/{tradeId}")
    public ResponseEntity<Security> getSecurityByTradeId(@PathVariable int tradeId) {
        System.out.println("/trades/get/security?Id: retrieving security by tradeId");
        Security security = tradeService.getSecurityByTradeId(tradeId);
        return ResponseEntity.ok(security);
    }


    @PostMapping("/add")
    public void createTrade(@RequestBody Trade trade) {
        tradeService.addTrade(trade);
    }

    @PutMapping("/update/{tradeId}")
    public void updateTrade(@PathVariable int tradeId, @RequestBody Trade trade) {
        tradeService.updateTradeById(tradeId);
    }

    @DeleteMapping("/delete/{tradeId}")
    public void deleteTrade(@PathVariable int tradeId, @RequestBody Trade trade) {
        tradeService.deleteTradeById(tradeId);
    }


}
