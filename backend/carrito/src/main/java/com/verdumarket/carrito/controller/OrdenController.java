package com.verdumarket.carrito.controller;

import com.verdumarket.carrito.model.Orden;
import com.verdumarket.carrito.service.IOrdenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class OrdenController {
    @Autowired
    private IOrdenService ordenService;

    @GetMapping("/listarConsumidor/{idConsumidor}")
    public List<Orden> listarOrdenesPorConsumidor(@PathVariable Long idConsumidor){
        List<Orden> ordenes = ordenService.listarOrdenesPorConsumidor(idConsumidor);
        return ordenes;
    }

    @GetMapping("/listarVendedor/{idVendedor}")
    public ResponseEntity<List<Orden>> listarOrdenesPorVendedor(@PathVariable Long idVendedor){
        List<Orden> ordenes = ordenService.listarOrdenesPorVendedor(idVendedor);
        return ResponseEntity.ok(ordenes);
    }
}
