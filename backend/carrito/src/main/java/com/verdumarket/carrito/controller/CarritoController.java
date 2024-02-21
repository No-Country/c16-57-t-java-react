package com.verdumarket.carrito.controller;

import com.verdumarket.carrito.dto.DatosCarritoItemsDTO;
import com.verdumarket.carrito.dto.DatosUsuariosDTO;
import com.verdumarket.carrito.model.Carrito;
import com.verdumarket.carrito.service.ICarritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CarritoController {
    @Autowired
    private ICarritoService carritoService;

    @GetMapping("/listarCarritosPorComprador/{idComprador}")
    public ResponseEntity<List<Carrito>> listarCarritosPorComprador(
            @PathVariable Long idComprador){
        List<Carrito> carritos = carritoService.listarCarritoIdComprador(idComprador);
        return ResponseEntity.ok(carritos);
    }
    @PostMapping("/buscarCarritoPorCompradorVendedor")
    public ResponseEntity<Carrito> buscarPorIdCompradorIdVendedor(@RequestBody DatosUsuariosDTO usuarios){
        Carrito carrito = carritoService.buscarCarritoPorVendedor(usuarios.getIdComprador(), usuarios.getIdVendedor());
        return ResponseEntity.ok(carrito);
    }

    @GetMapping("/traerCarritoPorId/{id}")
    public ResponseEntity<Carrito> buscarPorId(@PathVariable Long id){
        return ResponseEntity.ok(carritoService.findById(id));
    }

    @PostMapping("/guardarItem")
    public ResponseEntity<String> guardarItem(@RequestBody DatosCarritoItemsDTO datosCarritoItemsDTO){
        carritoService.GuardarItemCarrito(datosCarritoItemsDTO);
        return ResponseEntity.ok("Agregado el carrito exitosamente");
    }
}
