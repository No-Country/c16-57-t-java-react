package com.verdumarket.usuarioservice.Entidades;

import com.verdumarket.usuarioservice.Enums.Estado;

import jakarta.annotation.Nullable;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@Table(name = "usuario")
public class UsuarioEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Nullable
    private String nombre;

    @Nullable
    private String email;

    @Nullable
    private String contrasenia;

    @Nullable
    private String direccion;

    @Nullable
    private String celular;

    private boolean esAdmin;

    @Enumerated(EnumType.STRING)
    private Estado estado;

    public UsuarioEntity(String nombre, String email, String contrasenia, String direccion, String celular, boolean esAdmin, Estado estado){
        this.nombre = nombre;
        this.email = email;
        this.contrasenia = contrasenia;
        this.direccion = direccion;
        this.celular = celular;
        this.esAdmin = esAdmin;
        this.estado = estado;
    }
}
