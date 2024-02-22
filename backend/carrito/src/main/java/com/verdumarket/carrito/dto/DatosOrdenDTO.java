package com.verdumarket.carrito.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DatosOrdenDTO {
    private Long idOrden;
    private String celularVendedor;
    private String direccion;
    private String celularComprador;
    private String nombre;
}
