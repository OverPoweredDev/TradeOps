package com.group22.back_end.repositories;

import com.group22.back_end.models.Counterparty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CounterpartyRepository extends JpaRepository<Counterparty,Integer> {
}
