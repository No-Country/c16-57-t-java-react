package com.verdumarket.productoservice.repository;

import com.verdumarket.productoservice.model.ProductoVendedor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductoVendedorRepository extends JpaRepository<ProductoVendedor, Long> {
}
