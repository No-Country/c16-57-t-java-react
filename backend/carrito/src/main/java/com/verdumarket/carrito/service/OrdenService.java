package com.verdumarket.carrito.service;

import com.verdumarket.carrito.apis.UsuarioAPICliente;
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
       return ordenRepository.findAllByIdComprador(idConsumidor);
    }

    public List<Orden> listarOrdenesPorVendedor(Long idVendedor){
        //return ordenRepository.listarOrdenesPorVendedor(idVendedor);
        return ordenRepository.findAllByIdVendedor(idVendedor);
    }

    public void crearOrden(Long idCarrito){
        Carrito carrito = carritoRepository.findById(idCarrito).orElse(null);
        UsuarioDTO comprador = usuarioAPICliente.getUsuario(carrito.getIdComprador());
        UsuarioDTO vendedor = usuarioAPICliente.getUsuario(carrito.getIdVendedor());


        Orden orden = Orden.builder().
                estadoOrden(EstadoOrden.PENDIENTE).
                direccion(comprador.getDireccion()). //puede ser null
                celularComprador(comprador.getCelular()). //puede ser null
                celularVendedor(vendedor.getCelular()). //puede ser null
                idComprador(comprador.getId()).
                idVendedor(vendedor.getId()).
                fechaHora(ZonedDateTime.now(ZoneId.systemDefault())).
                carrito(carrito).
                nombre(comprador.getNombre()). //puede ser null
                precio(carrito.getPrecioTotal()).
                build();

        ordenRepository.save(orden);
    }
}
