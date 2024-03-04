package com.verdumarket.usuarioservice.Entidades;

import com.verdumarket.usuarioservice.Enums.Estado;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class FavoritosVendedor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "comprador_id", nullable = false)
    private UsuarioEntity comprador;

    @ManyToOne
    @JoinColumn(name = "vendedor_id", nullable = false)
    private UsuarioEntity vendedor;

    @Enumerated(EnumType.STRING)
    private Estado estado;

    public FavoritosVendedor(UsuarioEntity comprador, UsuarioEntity vendedor, Estado estado) {
        this.comprador = comprador;
        this.vendedor = vendedor;
        this.estado = estado;
    }

}
