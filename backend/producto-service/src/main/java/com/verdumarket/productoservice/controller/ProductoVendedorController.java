package com.verdumarket.productoservice.controller;

import com.verdumarket.productoservice.Exceptions.ResourceNotFoundException;
import com.verdumarket.productoservice.model.ProductoVendedor;
import com.verdumarket.productoservice.repository.ProductoVendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/productoVendedor")
public class ProductoVendedorController {

    @Autowired
    private ProductoVendedorRepository productoVendedorRepository;

    @GetMapping("/listar")
    public List<ProductoVendedor> productoVendedorGetAll()
    {
        return productoVendedorRepository.findAll();
    }

    @GetMapping("/listarPorId/{id}")
    public ResponseEntity<ProductoVendedor> getProductoVendedor(@PathVariable(value = "id") Long idProductoVendedor)
            throws ResourceNotFoundException {

        ProductoVendedor productoVendedor = productoVendedorRepository.findById(idProductoVendedor).orElseThrow(() ->
                new ResourceNotFoundException("Producto Vendedor not found for this  Id : : " + idProductoVendedor));
        return ResponseEntity.ok(productoVendedor);
    }

    @GetMapping("/listarPorVendedorId/{idVendedor}")
    public ResponseEntity<List<ProductoVendedor>> productoVendedorGetIdVendedor(@PathVariable(value = "idVendedor") Long idVendedor)
            throws ResourceNotFoundException {

        List<ProductoVendedor> productoVendedores = productoVendedorRepository.findByIdVendedor(idVendedor);

        if(productoVendedores.isEmpty()) {
            throw new ResourceNotFoundException("No products found for this vendedor id: " + idVendedor);
        }

        return ResponseEntity.ok(productoVendedores);
    }







}
