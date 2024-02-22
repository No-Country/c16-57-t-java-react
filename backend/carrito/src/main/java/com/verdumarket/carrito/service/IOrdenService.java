package com.verdumarket.carrito.service;

import com.verdumarket.carrito.dto.DatosOrdenDTO;
import com.verdumarket.carrito.model.Carrito;
import com.verdumarket.carrito.model.Orden;

import java.util.List;

public interface IOrdenService {
    public List<Orden> listarOrdenesPorVendedor(Long idVendedor);
    public List<Orden> listarOrdenesPorConsumidor(Long idConsumidor);

    public Orden crearOrden(Long idCarrito);

    Orden confirmacionOrden(DatosOrdenDTO datosOrden);
}
