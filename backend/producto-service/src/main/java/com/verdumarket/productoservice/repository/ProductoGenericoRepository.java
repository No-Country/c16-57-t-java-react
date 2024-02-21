package com.verdumarket.productoservice.repository;

import com.verdumarket.productoservice.model.ProductoGenerico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ProductoGenericoRepository extends JpaRepository<ProductoGenerico, Long> {

    Optional <ProductoGenerico> findByNombreProducto(String nombreProducto);

}
