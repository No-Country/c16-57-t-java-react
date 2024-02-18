package com.verdumarket.carrito.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Carrito {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCarrito;

    private Long idVendedor;
    private Long idComprador;
    private BigDecimal precioEnvio;
    private BigDecimal precioTotal;

    @Enumerated(EnumType.STRING)
    private EstadoCarrito estadoCarrito;

    @OneToMany(mappedBy = "carrito", cascade = CascadeType.ALL)
    private List<ItemPorCarrito> listadoItems;
}