package com.verdumarket.carrito.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemPorCarrito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idItemPorCarrito;
    private Long idProducto;
    private String nombreProducto;
    private int cantidad;
    private BigDecimal precio;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "carrito_id")
    private Carrito carrito;
    
}
