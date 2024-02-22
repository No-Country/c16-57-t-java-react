package com.verdumarket.usuarioservice.Interfaces;

import java.util.ArrayList;

import com.verdumarket.usuarioservice.DTO.UsuarioDTO;
import com.verdumarket.usuarioservice.Excepciones.Personalizado;

public interface UsuarioServiceInterface {

    void crearUsuario(String contrasenia, String email, String nombre, String direccion, String celular)
            throws Personalizado;

    void actualizarUsuario(Long id, String contrasenia, String email, String nombre, String direccion, String celular) throws Personalizado;

    void borrarUsuario(Long id) throws Personalizado;

    UsuarioDTO buscarUsuarioPorId(Long id) throws Personalizado;

    UsuarioDTO buscarUsuarioPorEmail(String email) throws Personalizado;

    ArrayList<UsuarioDTO> buscarTodosLosUsuarios() throws Personalizado;
}
