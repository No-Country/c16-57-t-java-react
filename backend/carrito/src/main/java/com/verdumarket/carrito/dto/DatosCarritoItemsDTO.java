package com.verdumarket.carrito.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.verdumarket.carrito.model.Carrito;
import com.verdumarket.carrito.model.EstadoItem;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DatosCarritoItemsDTO {
    private Long idProducto;
    private String nombreProducto;
    private int cantidad;
    private BigDecimal precio;
    //private BigDecimal precioEnvio; // no se usa por ahora
    //private EstadoItem estadoItem; //eliminable

    private Long idComprador;
    private Long idVendedor;
}
