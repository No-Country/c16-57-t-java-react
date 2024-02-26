package com.verdumarket.productoservice.repository;

import com.verdumarket.productoservice.model.ProductoVendedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductoVendedorRepository extends JpaRepository<ProductoVendedor, Long> {

    @Query("SELECT a FROM ProductoVendedor a WHERE a.precioUnidad <= :precioUnidad")
    List<ProductoVendedor> findByPrecioUnidadWithJPQL(BigDecimal precioUnidad);

    List<ProductoVendedor> findByIdVendedor(Long idVendedor);

    List<ProductoVendedor> findByStock(Integer stock);
}
