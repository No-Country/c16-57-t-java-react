package com.verdumarket.usuarioservice.DTO;

import java.io.Serializable;

import lombok.Data;

@Data
public class UsuarioDTO implements Serializable {

    final String nombre;

    final String email;

    final String direccion;

    final String celular;

    public UsuarioDTO(String nombre, String email, String direccion, String celular){
        this.nombre = nombre;
        this.email = email;
        this.direccion = direccion;
        this.celular = celular;
    }
}
