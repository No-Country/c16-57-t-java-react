package com.verdumarket.usuarioservice.Interfaces;

import com.verdumarket.usuarioservice.DTO.FavoritosVendedorDTO;
import com.verdumarket.usuarioservice.DTO.UsuarioDTO;
import com.verdumarket.usuarioservice.Excepciones.Personalizado;

public interface FavVendedorServiceInterface {
    
    FavoritosVendedorDTO agregarFavVendedor(FavoritosVendedorDTO user) throws Personalizado;

    FavoritosVendedorDTO borrarFavVendedor(FavoritosVendedorDTO user) throws Personalizado;

    UsuarioDTO buscarFavVendedor(FavoritosVendedorDTO user) throws Personalizado;
}
