package com.verdumarket.carrito.controller;

import com.verdumarket.carrito.apis.UsuarioAPICliente;
import com.verdumarket.carrito.model.Carrito;
import com.verdumarket.carrito.model.Orden;
import com.verdumarket.carrito.service.IOrdenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class OrdenController {
    @Autowired
    private IOrdenService ordenService;

    @GetMapping("/listarOrdenesConsumidor/{idConsumidor}")
    public List<Orden> listarOrdenesPorConsumidor(@PathVariable Long idConsumidor){
        List<Orden> ordenes = ordenService.listarOrdenesPorConsumidor(idConsumidor);
        return ordenes;
    }

    @GetMapping("/listarOrdenesVendedor/{idVendedor}")
    public ResponseEntity<List<Orden>> listarOrdenesPorVendedor(@PathVariable Long idVendedor){
        List<Orden> ordenes = ordenService.listarOrdenesPorVendedor(idVendedor);
        return ResponseEntity.ok(ordenes);
    }

    @GetMapping("/crearOrdenPorIdCarrito/{idCarrito}")
    public ResponseEntity<String> crearOrden(@PathVariable Long idCarrito){
        ordenService.crearOrden(idCarrito);
        return ResponseEntity.ok("Orden Creada con Éxito");
    }
}
