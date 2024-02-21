package com.verdumarket.carrito.service;

import com.verdumarket.carrito.dto.DatosCarritoItemsDTO;
import com.verdumarket.carrito.model.Carrito;
import com.verdumarket.carrito.model.EstadoCarrito;
import com.verdumarket.carrito.model.EstadoItem;
import com.verdumarket.carrito.model.ItemPorCarrito;
import com.verdumarket.carrito.repository.CarritoRepository;
import com.verdumarket.carrito.repository.ItemPorCarritoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
public class CarritoService implements ICarritoService{

    @Autowired
    private ItemPorCarritoRepository itemPorCarritoRepository;
    @Autowired
    private CarritoRepository carritoRepository;
    @Override
    public List<Carrito> listarCarritoIdComprador(Long idComprador){
        return carritoRepository.findAllByIdComprador(idComprador);
    }
    @Override
    public Carrito buscarCarritoPorVendedor(Long idComprador, Long idVendedor){
        return carritoRepository.findByIdCompradorIdVendedor(idComprador,idVendedor);
    }

    @Override
    public Carrito findById(Long id) {
        return carritoRepository.findById(id).orElse(null);
    }


    @Override
    @Transactional
    public void GuardarItemCarrito(DatosCarritoItemsDTO datos) {
        Carrito carrito = obtenerOcrearCarrito(datos);
        ItemPorCarrito item = crearItemCarrito(datos, carrito);

        actualizarCarritoYGuardar(carrito, item);
    }

    private Carrito obtenerOcrearCarrito(DatosCarritoItemsDTO datos) {
        Carrito carrito = buscarCarritoPorIds(datos.getIdComprador(), datos.getIdVendedor());
        if (carrito == null) {
            carrito = crearNuevoCarrito(datos);
        }
        return carrito;
    }

    private Carrito crearNuevoCarrito(DatosCarritoItemsDTO datos) {
        Carrito carrito = Carrito.builder()
                .estadoCarrito(EstadoCarrito.ACTIVO)
                .idComprador(datos.getIdComprador())
                .idVendedor(datos.getIdVendedor())
               // .precioEnvio(datos.getPrecioEnvio())
                .precioTotal(BigDecimal.ZERO)
                .listadoItems(new ArrayList<>())
                .build();
        return carritoRepository.saveAndFlush(carrito);
    }

    private ItemPorCarrito crearItemCarrito(DatosCarritoItemsDTO datos, Carrito carrito) {
        ItemPorCarrito item = new ItemPorCarrito();
        ItemPorCarrito itemDB = itemPorCarritoRepository.retornarIdItemSiExiste(datos.getIdProducto(), carrito.getIdCarrito());

        item.setIdProducto(datos.getIdProducto());
        item.setNombreProducto(datos.getNombreProducto());
        item.setCarrito(carrito);
        item.setEstadoItem(EstadoItem.ACTIVO);

        if (itemDB != null) {
            actualizarItemExistente(item, itemDB, datos);
        } else {
            item.setPrecio(datos.getPrecio());
            item.setCantidad(datos.getCantidad());
            carrito.getListadoItems().add(item);
        }
        return item;
    }

    private void actualizarItemExistente(ItemPorCarrito item, ItemPorCarrito itemDB, DatosCarritoItemsDTO datos) {
        item.setIdItemPorCarrito(itemDB.getIdItemPorCarrito());
        item.setCantidad(datos.getCantidad() + itemDB.getCantidad());
        BigDecimal precioDatos = datos.getPrecio() != null ? datos.getPrecio() : BigDecimal.ZERO;
        BigDecimal precioItemPorCarrito = itemDB.getPrecio() != null ? itemDB.getPrecio() : BigDecimal.ZERO;
        BigDecimal nuevoPrecio = precioDatos.add(precioItemPorCarrito);
        item.setPrecio(nuevoPrecio);
        itemPorCarritoRepository.save(item);
    }

    private void actualizarCarritoYGuardar(Carrito carrito, ItemPorCarrito item) {
        carrito.actualizarPrecioTotal();
        carritoRepository.save(carrito);
    }


    private Carrito buscarCarritoPorIds(Long idComprador, Long idVendedor){
        Carrito carrito = carritoRepository.findByIdCompradorIdVendedor(idComprador,idVendedor);
        return carrito;
    }

}
