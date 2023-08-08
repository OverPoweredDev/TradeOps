package com.group22.back_end.models;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "counterparty")
public class Counterparty {
    @Id
    @Column(name = "ID")
    private int counterpartyId;

    @Column(name = "NAME")
    private String counterpartyName;

    @OneToMany(mappedBy = "counterpartyId")
    List<Trade> trades = new ArrayList<>();

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
