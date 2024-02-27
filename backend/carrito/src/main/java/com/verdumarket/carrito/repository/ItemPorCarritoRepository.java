package com.verdumarket.carrito.repository;

import com.verdumarket.carrito.model.ItemPorCarrito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemPorCarritoRepository extends JpaRepository<ItemPorCarrito, Long> {

    @Query("SELECT i FROM ItemPorCarrito i WHERE i.idProducto = :idProducto AND i.carrito.idCarrito = :idCarrito")
    public ItemPorCarrito retornarItemSiExiste(Long idProducto, Long idCarrito);
}
