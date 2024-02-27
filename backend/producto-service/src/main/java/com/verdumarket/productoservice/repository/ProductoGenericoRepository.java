package com.verdumarket.productoservice.repository;

import com.verdumarket.productoservice.model.Categoria;
import com.verdumarket.productoservice.model.ProductoGenerico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;

@Repository
public interface ProductoGenericoRepository extends JpaRepository<ProductoGenerico, Long> {

    List<ProductoGenerico> findByTipoUnidad(String tipoUnidad);

    List<ProductoGenerico> findByCategoria(Categoria categoria);

    List<ProductoGenerico> findByNombreProductoContaining(String nombreProducto);
}
