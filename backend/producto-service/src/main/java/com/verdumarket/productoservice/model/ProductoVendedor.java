package com.verdumarket.productoservice.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name = "ProductoVendedor")
public class ProductoVendedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProductoVendedor;

    private Long idVendedor;

    @ManyToOne
    @JoinColumn(name = "idProducto", referencedColumnName = "idProductoGenerico")
    private ProductoGenerico productoGenerico;

    private Integer stock;

    private BigDecimal precioUnidad;

    @Enumerated(EnumType.ORDINAL)
    private EstadoProducto estadoProducto;

}
