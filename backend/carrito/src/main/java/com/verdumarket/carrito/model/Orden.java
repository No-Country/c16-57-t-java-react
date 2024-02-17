package com.verdumarket.carrito.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.ZonedDateTime;

@Entity
@Data
@NoArgsConstructor @AllArgsConstructor
public class Orden {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idOrden;
    private Long idComprador;
    private Long idVendedor;
    private String celularVendedor;
    private BigDecimal precio;
    private String direccion;
    private String celularComprador;
    private String nombre;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "carrito_id")
    private Carrito carrito;
    private EstadoOrden estadoOrden;
    private ZonedDateTime fechaHora;
}
