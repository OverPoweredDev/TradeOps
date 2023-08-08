package com.group22.back_end.models;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "counterparty")
public class Counterparty {
    @Id
    @Column(name = "ID")
    private int counterpartyId;

    @Column(name = "NAME")
    private String counterpartyName;

    public Counterparty() {
    }

    public Counterparty(int counterpartyId, String counterpartyName) {
        this.counterpartyId = counterpartyId;
        this.counterpartyName = counterpartyName;
    }

    public int getCounterpartyId() {
        return counterpartyId;
    }

    public void setCounterpartyId(int counterpartyId) {
        this.counterpartyId = counterpartyId;
    }

    public String getCounterpartyName() {
        return counterpartyName;
    }

    public void setCounterpartyName(String counterpartyName) {
        this.counterpartyName = counterpartyName;
    }
}
