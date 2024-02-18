package com.verdumarket.carrito.repository;

import com.verdumarket.carrito.model.Orden;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.function.Function;

@Repository
public interface OrdenRepository extends JpaRepository<Orden, Long> {

    List<Orden> findAllByIdComprador(Long idComprador);

    List<Orden> findAllByIdVendedor(Long idVendedor);

 /*   @Query("SELECT o FROM Orden o WHERE o.idComprador = :idConsumidor")
    public List<Orden> listarOrdenesPorConsumidor(@Param("idConsumidor") Long idConsumidor);

    @Query("SELECT o FROM Orden o WHERE o.idVendedor = :idVendedor")
    public List<Orden> listarOrdenesPorVendedor(@Param("idVendedor") Long idVendedor);
    */
}
