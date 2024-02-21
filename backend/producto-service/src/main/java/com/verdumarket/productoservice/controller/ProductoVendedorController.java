package com.verdumarket.productoservice.controller;

import com.verdumarket.productoservice.model.ProductoVendedor;
import com.verdumarket.productoservice.repository.ProductoVendedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
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


}
