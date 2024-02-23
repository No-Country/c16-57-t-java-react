package com.verdumarket.productoservice.repository;

import com.verdumarket.productoservice.model.ProductoVendedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductoVendedorRepository extends JpaRepository<ProductoVendedor, Long> {

    Optional<ProductoVendedor> findByPrecioUnidad(BigDecimal precioUnidad);

    List<ProductoVendedor> findByIdVendedor(Long idVendedor);

    Optional<ProductoVendedor> findByStock(Integer stock);
}
