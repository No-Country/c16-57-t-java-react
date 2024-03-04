package com.verdumarket.usuarioservice.DTO;

import lombok.Data;

@Data
public class FavoritosVendedorDTO {
    
    final private Long idVendedor;

    final private Long idComprador;

    public FavoritosVendedorDTO(Long idVendedor, Long idComprador) {
        this.idVendedor = idVendedor;
        this.idComprador = idComprador;
    }
}