package com.verdumarket.productoservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor

public class ProductoGenerico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProductoGenerico;

    private Long idCategoria;

    private String tipoUnidad;

    private String nombreProducto;

    private String Descripcion;

}
