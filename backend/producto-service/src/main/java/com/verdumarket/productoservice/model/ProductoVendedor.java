package com.verdumarket.productoservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductoVendedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProductoVendedor;

    private Long idVendedor;

    private Long idProducto;

    private int stock;

    private BigDecimal precioUnidad;

    private int estado;

}
