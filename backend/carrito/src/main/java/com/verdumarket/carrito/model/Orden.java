package com.verdumarket.carrito.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.ZonedDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
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

    @ManyToOne
    @JoinColumn(name = "idCarrito")
    private Carrito carrito;

    @Enumerated(EnumType.STRING)
    private EstadoOrden estadoOrden;

    private ZonedDateTime fechaHora;
}
