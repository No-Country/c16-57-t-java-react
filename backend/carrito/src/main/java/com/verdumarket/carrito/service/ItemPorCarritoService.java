package com.verdumarket.carrito.service;

import com.verdumarket.carrito.model.Carrito;
import com.verdumarket.carrito.model.EstadoItem;
import com.verdumarket.carrito.model.ItemPorCarrito;
import com.verdumarket.carrito.repository.CarritoRepository;
import com.verdumarket.carrito.repository.ItemPorCarritoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.NoSuchElementException;


@Service
public class ItemPorCarritoService implements IItemPorCarritoService{
    @Autowired
    private ItemPorCarritoRepository itemPorCarritoRepository;
    @Autowired
    private CarritoRepository carritoRepository;

    @Override
    public void cancelarItem(Long id) {
        try {
            ItemPorCarrito item = itemPorCarritoRepository.findById(id)
                    .orElseThrow(() -> new NoSuchElementException("No se encontró ningún item con el ID: " + id));
            item.setPrecio(BigDecimal.ZERO);
            item.setCantidad(0);
            item.setEstadoItem(EstadoItem.INACTIVO);
            itemPorCarritoRepository.save(item);

            buscarCarritoYActualizarLista(item);
        } catch (NoSuchElementException e) {
            System.err.println("No se encontró ningún item con el ID: " + id);
        } catch (Exception e) {
            System.err.println("Error al cancelar el item del carrito");
            e.printStackTrace();
        }
    }

    private void buscarCarritoYActualizarLista(ItemPorCarrito item){
        try {
            Carrito carrito = carritoRepository.findById(item.getCarrito().getIdCarrito()).orElse(null);
            if(carrito != null)
                carrito.actualizarPrecioTotal();

            carritoRepository.save(carrito);
        } catch (Exception e) {
            System.err.println("Error al buscar el carrito y actualizar la lista de items");
            e.printStackTrace();
        }
    }
}
