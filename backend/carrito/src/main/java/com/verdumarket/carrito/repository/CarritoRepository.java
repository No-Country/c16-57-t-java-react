package com.verdumarket.carrito.repository;

import com.verdumarket.carrito.model.Carrito;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarritoRepository extends JpaRepository<Carrito, Long> {

    List<Carrito> findAllByIdComprador(Long idComprador);

    @Query("SELECT c FROM Carrito c WHERE c.idComprador = :idComprador AND c.idVendedor = :idVendedor")
    Carrito findByIdCompradorIdVendedor(@Param("idComprador") Long idComprador, @Param("idVendedor") Long idVendedor);
}

