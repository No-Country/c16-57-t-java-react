package com.verdumarket.carrito.service;

import com.verdumarket.carrito.model.Carrito;
import com.verdumarket.carrito.model.EstadoItem;
import com.verdumarket.carrito.model.ItemPorCarrito;
import com.verdumarket.carrito.repository.CarritoRepository;
import com.verdumarket.carrito.repository.ItemPorCarritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class ItemPorCarritoService implements IItemPorCarritoService{
    @Autowired
    private ItemPorCarritoRepository itemPorCarritoRepository;
    @Autowired
    private CarritoRepository carritoRepository;

    @Override
    public void cancelarItem(Long id) {
        ItemPorCarrito item = itemPorCarritoRepository.findById(id).orElse(null);
        if(item != null){
            item.setPrecio(new BigDecimal(0));
            item.setCantidad(0);
            item.setEstadoItem(EstadoItem.INACTIVO);
            itemPorCarritoRepository.save(item);
        }
        buscarCarritoYActualizarLista(item);
    }

    private void buscarCarritoYActualizarLista(ItemPorCarrito item){
        Carrito carrito = carritoRepository.findById(item.getCarrito().getIdCarrito()).orElse(null);
        if(carrito != null)
            carrito.actualizarPrecioTotal();

        carritoRepository.save(carrito);
    }

}
