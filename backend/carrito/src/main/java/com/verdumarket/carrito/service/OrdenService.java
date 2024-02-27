package com.verdumarket.carrito.service;

import com.verdumarket.carrito.apis.UsuarioAPICliente;
import com.verdumarket.carrito.dto.DatosOrdenDTO;
import com.verdumarket.carrito.dto.UsuarioDTO;
import com.verdumarket.carrito.model.Carrito;
import com.verdumarket.carrito.model.EstadoOrden;
import com.verdumarket.carrito.model.Orden;
import com.verdumarket.carrito.repository.CarritoRepository;
import com.verdumarket.carrito.repository.OrdenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.List;

@Service
public class OrdenService implements IOrdenService{
    @Autowired
    private OrdenRepository ordenRepository;
    @Autowired
    private CarritoRepository carritoRepository;

    @Autowired
    private UsuarioAPICliente usuarioAPICliente;

    public List<Orden> listarOrdenesPorConsumidor(Long idConsumidor){
       // return ordenRepository.listarOrdenesPorConsumidor(idConsumidor);
       return ordenRepository.findAllByIdCompradorAndEstadoOrdenNot(idConsumidor,EstadoOrden.INACTIVO);
    }

    public List<Orden> listarOrdenesPorVendedor(Long idVendedor){
        //return ordenRepository.listarOrdenesPorVendedor(idVendedor);
        return ordenRepository.findAllByIdVendedorAndEstadoOrdenNot(idVendedor,EstadoOrden.INACTIVO);
    }

    @Override
    public Orden crearOrden(Long idCarrito, DatosOrdenDTO datosOrden) {
        try {
            Carrito carrito = carritoRepository.findById(idCarrito)
                    .orElseThrow(() -> new IllegalArgumentException("El carrito con ID " + idCarrito + " no fue encontrado"));

            UsuarioDTO comprador = usuarioAPICliente.getUsuario(carrito.getIdComprador());
            UsuarioDTO vendedor = usuarioAPICliente.getUsuario(carrito.getIdVendedor());

            Orden orden = Orden.builder()
                    .estadoOrden(EstadoOrden.PENDIENTE)
                    .direccion(comprador.getDireccion())
                    .celularComprador(comprador.getCelular())
                    .celularVendedor(vendedor.getCelular())
                    .idComprador(comprador.getId())
                    .idVendedor(vendedor.getId())
                    .fechaHora(ZonedDateTime.now(ZoneId.systemDefault()))
                    .carrito(carrito)
                    .nombre(comprador.getNombre())
                    .precio(carrito.getPrecioTotal())
                    .build();

            actualizarDatosOrden(orden, datosOrden);
            verificarDatosNoNulos(orden);
            ordenRepository.save(orden);
            return orden;
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            throw e;
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Error al crear la orden: " + e.getMessage(), e);
        }
    }


    private void actualizarDatosOrden(Orden orden, DatosOrdenDTO datosOrden) {
        if (datosOrden.getCelularComprador() != null) {
            orden.setCelularComprador(datosOrden.getCelularComprador());
        }
        if (datosOrden.getCelularVendedor() != null) {
            orden.setCelularVendedor(datosOrden.getCelularVendedor());
        }
        if (datosOrden.getDireccion() != null) {
            orden.setDireccion(datosOrden.getDireccion());
        }
        if (datosOrden.getNombre() != null) {
            orden.setNombre(datosOrden.getNombre());
        }
    }

    private void verificarDatosNoNulos(Orden orden) {
        if (orden.getCelularComprador() == null) {
            throw new IllegalArgumentException("El celular del comprador no puede ser nulo");
        }
        if (orden.getCelularVendedor() == null) {
            throw new IllegalArgumentException("El celular del vendedor no puede ser nulo");
        }
        if (orden.getDireccion() == null) {
            throw new IllegalArgumentException("La dirección no puede ser nula");
        }
        if (orden.getNombre() == null) {
            throw new IllegalArgumentException("El nombre no puede ser nulo");
        }
    }
}
