package com.group22.back_end.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDate;

@Entity
@Table(name = "trade")
public class Trade {
    @Id
    @Column(name = "Id")
    int id;

    @Column(name = "BookId")
    int bookId;

    @Column(name = "CounterpartyId")
    int counterpartyId;

    @Column(name = "SecurityId")
    int securityId;

    @Column(name = "Quantity")
    int quantity;

    @Column(name = "Status")
    String status;

    @Column(name = "Price")
    float price;

    @Column(name = "Buy_Sell")
    String buySell;

    @Column(name = "TradeDate")
    LocalDate tradeDate;

    @Column(name = "SettlementDate")
    LocalDate settlementDate;

    public Trade() {

    }

    public Trade(int id, int bookId, int counterpartyId, int securityId, int quantity, String status, float price, String buySell, LocalDate tradeDate, LocalDate settlementDate) {
        this.id = id;
        this.bookId = bookId;
        this.counterpartyId = counterpartyId;
        this.securityId = securityId;
        this.quantity = quantity;
        this.status = status;
        this.price = price;
        this.buySell = buySell;
        this.tradeDate = tradeDate;
        this.settlementDate = settlementDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public int getCounterpartyId() {
        return counterpartyId;
    }

    public void setCounterpartyId(int counterpartyId) {
        this.counterpartyId = counterpartyId;
    }

    public int getSecurityId() {
        return securityId;
    }

    public void setSecurityId(int securityId) {
        this.securityId = securityId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getBuySell() {
        return buySell;
    }

    public void setBuySell(String buySell) {
        this.buySell = buySell;
    }

    public LocalDate getTradeDate() {
        return tradeDate;
    }

    public void setTradeDate(LocalDate tradeDate) {
        this.tradeDate = tradeDate;
    }

    public LocalDate getSettlementDate() {
        return settlementDate;
    }

    public void setSettlementDate(LocalDate settlementDate) {
        this.settlementDate = settlementDate;
    }
}
