package com.verdumarket.productoservice.controller;

import com.verdumarket.productoservice.Exceptions.ResourceNotFoundException;
import com.verdumarket.productoservice.model.ProductoVendedor;
import com.verdumarket.productoservice.repository.ProductoVendedorRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ProductoVendedorController {

    @Autowired
    private ProductoVendedorRepository productoVendedorRepository;

    @GetMapping("/listProdVendedor")
    public List<ProductoVendedor> productoVendedorGetAll()
    {
        return productoVendedorRepository.findAll();
    }

    @GetMapping("/listProdVendedorId/{id}")
    public ResponseEntity<ProductoVendedor> getProductoVendedor(@PathVariable(value = "id") Long idProductoVendedor)
    throws ResourceNotFoundException {

        ProductoVendedor productoVendedor = productoVendedorRepository.findById(idProductoVendedor).orElseThrow(() ->
        new ResourceNotFoundException("Producto Vendedor not found for this  Id : : " + idProductoVendedor));
        return ResponseEntity.ok(productoVendedor);
    }



    @GetMapping("/listProdVendedorIdVendedor/{idVendedor}")
    public ResponseEntity<List<ProductoVendedor>> productoVendedorGetIdVendedor(@PathVariable(value = "idVendedor") Long idVendedor)
            throws ResourceNotFoundException {

        List<ProductoVendedor> productoVendedores = productoVendedorRepository.findByIdVendedor(idVendedor);

        if(productoVendedores.isEmpty()) {
            throw new ResourceNotFoundException("No products found for this vendedor id: " + idVendedor);
        }

        return ResponseEntity.ok(productoVendedores);
    }

    @GetMapping("/listProdVendedorPrecioUnidad/{precioUnidad}")
    public ResponseEntity <List<ProductoVendedor>> productoVendedorGetByPrecioUnidad(@PathVariable(name = "precioUnidad")BigDecimal precioUnidad)
        throws ResourceNotFoundException {

        List<ProductoVendedor> productoVendedors = productoVendedorRepository.findByPrecioUnidadWithJPQL(precioUnidad);

        if (productoVendedors.isEmpty()){
            throw new ResourceNotFoundException("Resource not found exception");
        }
        return ResponseEntity.ok(productoVendedors);
    }

    @GetMapping("/listProdVendedorStock/{stock}")
    public ResponseEntity <List<ProductoVendedor>> productoVendedorGetByStock(@PathVariable(name = "stock") Integer stock)
        throws ResourceNotFoundException {

        List<ProductoVendedor> productoVendedor = productoVendedorRepository.findByStock(stock);

        if(productoVendedor.isEmpty()){
            throw new ResourceNotFoundException("No products found for this Stock : " + stock);
        }

        return ResponseEntity.ok(productoVendedor);
    }

    @PostMapping("/nuevoProdVendedor")
    public ProductoVendedor createProductoVendedor(@Validated @RequestBody ProductoVendedor productoVendedor)
    {
        return productoVendedorRepository.save(productoVendedor);
    }

    @PutMapping("/editarProdVendedor/{id}")
    public ResponseEntity <ProductoVendedor> updateProductoVendedor(@PathVariable(name = "id") Long idProductoVendedor
        , @Validated @RequestBody ProductoVendedor productoDetails) throws ResourceNotFoundException {

        ProductoVendedor productoVendedor = productoVendedorRepository.findById(idProductoVendedor)
                .orElseThrow(() -> new ResourceNotFoundException("Producto Vendedor not found for this id : "));

        productoVendedor.setIdVendedor(productoDetails.getIdVendedor());
        productoVendedor.setProductoGenerico(productoDetails.getProductoGenerico());
        productoVendedor.setStock(productoDetails.getStock());
        productoVendedor.setPrecioUnidad(productoDetails.getPrecioUnidad());
        productoVendedor.setEstadoProducto(productoDetails.getEstadoProducto());

        final ProductoVendedor updateProducto = productoVendedorRepository.save(productoVendedor);
        return ResponseEntity.ok(updateProducto);
    }

    @DeleteMapping("/borrarProdVendedorId/{id}")
    public Map<String, Boolean> deleteProductoVendedor(@PathVariable(value = "id") Long idProductoVendedor)
        throws ResourceNotFoundException
    {
        ProductoVendedor productoVendedor = productoVendedorRepository.findById(idProductoVendedor)
                .orElseThrow(() -> new ResourceNotFoundException("x not found for this id : : " + idProductoVendedor));
        productoVendedorRepository.delete(productoVendedor);
        Map<String, Boolean> response = new HashMap<>();
        response.put("The Producto Vendedor : :" + idProductoVendedor + " has been deleted", Boolean.TRUE);
        return response;
    }




}
