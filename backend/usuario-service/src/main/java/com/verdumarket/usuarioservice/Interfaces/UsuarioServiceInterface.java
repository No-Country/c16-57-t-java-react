package com.verdumarket.usuarioservice.Interfaces;

import java.util.ArrayList;

import com.verdumarket.usuarioservice.Entidades.UsuarioEntity;
import com.verdumarket.usuarioservice.Excepciones.Personalizado;

public interface UsuarioServiceInterface {

    void crearUsuario(String contrasenia, String email, String nombre, String direccion, String celular)
            throws Personalizado;

    void actualizarUsuario(String contrasenia, String email, String nombre, String direccion, String celular) throws Personalizado;

    void borrarUsuario(String email) throws Personalizado;

    UsuarioEntity buscarUsuario(String email) throws Personalizado;

    ArrayList<UsuarioEntity> buscarTodosLosUsuarios() throws Personalizado;
}
