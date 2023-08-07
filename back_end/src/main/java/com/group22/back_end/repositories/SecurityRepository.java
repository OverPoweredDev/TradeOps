package com.group22.back_end.repositories;

import com.group22.back_end.models.Security;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SecurityRepository extends JpaRepository<Security,Integer> {
}
