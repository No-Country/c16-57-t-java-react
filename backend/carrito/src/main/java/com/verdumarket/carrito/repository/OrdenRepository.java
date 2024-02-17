package com.verdumarket.carrito.repository;

import com.verdumarket.carrito.model.Orden;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrdenRepository extends JpaRepository<Orden,Long> {
}
