package com.verdumarket.carrito.repository;

import com.verdumarket.carrito.model.ItemPorCarrito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemPorCarritoRepository extends JpaRepository<ItemPorCarrito,Long> {
}
