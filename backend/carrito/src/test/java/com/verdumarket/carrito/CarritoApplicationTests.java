package com.verdumarket.carrito;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import com.verdumarket.carrito.dto.DatosCarritoItemsDTO;
import com.verdumarket.carrito.model.Carrito;
import com.verdumarket.carrito.model.EstadoCarrito;
import com.verdumarket.carrito.repository.CarritoRepository;
import com.verdumarket.carrito.repository.ItemPorCarritoRepository;
import com.verdumarket.carrito.service.CarritoService;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
class CarritoServiceTests {

    @MockBean
    private CarritoRepository carritoRepository;

    @MockBean
    private ItemPorCarritoRepository itemPorCarritoRepository;

    @Test
    @Transactional
    void testGuardarItemCarrito() {
        // Datos de prueba
        DatosCarritoItemsDTO datos = DatosCarritoItemsDTO.builder()
                .idProducto(1L)
                .nombreProducto("Producto de prueba")
                .cantidad(1)
                .precio(BigDecimal.TEN)
                .idComprador(1L)
                .idVendedor(2L)
                .build();

        // Configuración del comportamiento simulado del repositorio
        Carrito carrito = Carrito.builder()
                .idCarrito(1L)
                .idVendedor(2L)
                .idComprador(1L)
                .precioTotal(BigDecimal.ZERO)
                .estadoCarrito(EstadoCarrito.ACTIVO)
                .listadoItems(new ArrayList<>())
                .build();

        when(carritoRepository.findByIdCompradorIdVendedor(1L, 2L)).thenReturn(carrito);
        when(itemPorCarritoRepository.retornarIdItemSiExiste(1L, 1L)).thenReturn(null);

        // Llamar al método que se va a probar
        CarritoService carritoService = new CarritoService(carritoRepository, itemPorCarritoRepository);
        carritoService.GuardarItemCarrito(datos);

        // Verificar que el método hizo lo esperado
        assertEquals(1, carrito.getListadoItems().size());
        assertEquals("Producto de prueba", carrito.getListadoItems().get(0).getNombreProducto());
    }
}
