package com.verdumarket.carrito.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor @Builder
public class ItemPorCarrito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idItemPorCarrito;

    private Long idProducto;
    private String nombreProducto;
    private int cantidad;
    private BigDecimal precio;

    @Enumerated(EnumType.STRING)
    private EstadoItem estadoItem;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "idCarrito")
    private Carrito carrito;
}
