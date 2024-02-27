package com.verdumarket.usuarioservice.Interfaces;

import java.util.ArrayList;

import com.verdumarket.usuarioservice.DTO.UsuarioDTO;
import com.verdumarket.usuarioservice.Entidades.UsuarioEntity;
import com.verdumarket.usuarioservice.Excepciones.Personalizado;

public interface UsuarioServiceInterface {

    UsuarioDTO crearUsuario(UsuarioEntity usuario)
            throws Personalizado;

    UsuarioDTO actualizarUsuario(Long id, UsuarioEntity usuario) throws Personalizado;

    UsuarioDTO desactivarUsuario(Long id) throws Personalizado;

    UsuarioDTO reactivarUsuario(Long id) throws Personalizado;

    UsuarioDTO buscarUsuarioPorId(Long id) throws Personalizado;

    UsuarioDTO buscarUsuarioPorEmail(String email) throws Personalizado;

    ArrayList<UsuarioDTO> buscarTodosLosUsuarios() throws Personalizado;
}
