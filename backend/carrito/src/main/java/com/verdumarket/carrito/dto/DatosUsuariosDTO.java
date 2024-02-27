package com.verdumarket.carrito.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DatosUsuariosDTO {
    private Long idComprador;
    private Long idVendedor;
}
