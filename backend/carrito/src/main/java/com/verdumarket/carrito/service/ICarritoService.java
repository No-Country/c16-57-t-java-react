package com.verdumarket.carrito.service;

import com.verdumarket.carrito.dto.DatosCarritoItemsDTO;
import com.verdumarket.carrito.model.Carrito;

import java.util.List;
import java.util.Optional;

public interface ICarritoService {
    List<Carrito> listarCarritoIdComprador(Long idComprador);

    Carrito buscarCarritoPorVendedor(Long idComprador, Long idVendedor);

    Carrito findById(Long id);

    void GuardarItemCarrito(DatosCarritoItemsDTO datos);
}
