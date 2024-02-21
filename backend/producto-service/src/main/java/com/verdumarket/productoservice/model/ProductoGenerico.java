package com.verdumarket.productoservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor

@Entity
@Table(name = "ProductoGenerico")
public class ProductoGenerico {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProductoGenerico;

    @ManyToOne
    @JoinColumn(name = "categoria", referencedColumnName = "idCategoria")
    private Categoria categoria;

    private String tipoUnidad;

    private String nombreProducto;

    private String descripcion;

}
