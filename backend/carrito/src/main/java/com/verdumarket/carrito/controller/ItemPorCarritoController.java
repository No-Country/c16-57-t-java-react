package com.verdumarket.carrito.controller;

import com.verdumarket.carrito.service.IItemPorCarritoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ItemPorCarritoController {
    @Autowired
    private IItemPorCarritoService itemPorCarritoService;

    @GetMapping("/cancelarItem/{id}")
    public ResponseEntity<String> cancelarItem(@PathVariable Long id){
        itemPorCarritoService.cancelarItem(id);
        return ResponseEntity.ok("Item Cancelado con éxito");
    }

   /* @GetMapping("/modificarItem/{idItem}")
    public ResponseEntity<String> modificarItem(@PathVariable Long idItem){

    }*/
}
