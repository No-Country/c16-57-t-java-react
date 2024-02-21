package com.verdumarket.productoservice.controller;

import com.verdumarket.productoservice.Exceptions.ResourceNotFoundException;
import com.verdumarket.productoservice.model.ProductoGenerico;
import com.verdumarket.productoservice.repository.ProductoGenericoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/productos")
public class ProductoGenericoController {

    @Autowired
    private ProductoGenericoRepository productoGenericoRepository;

    @GetMapping("/listar")
    public List<ProductoGenerico> productoGenericoGetAll()
    {
        return productoGenericoRepository.findAll();
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<ProductoGenerico> getProductoGenericoId(@PathVariable(value = "id") Long idProductoGenerico)
            throws ResourceNotFoundException {

        ProductoGenerico productoGenerico = productoGenericoRepository.findById(idProductoGenerico).orElseThrow(() ->
                new ResourceNotFoundException("Producto Generico not found for this  Id : : " + idProductoGenerico));
        return ResponseEntity.ok(productoGenerico);
    }

    @GetMapping("/listarNombre/{nombreProducto}")
    public ResponseEntity<ProductoGenerico> getProductoGenericoNombre(@PathVariable(value = "nombreProducto") String nombreProducto)
        throws ResourceNotFoundException {

        ProductoGenerico productoGenerico = productoGenericoRepository.findByNombreProducto(nombreProducto).orElseThrow(() ->
                new ResourceNotFoundException("Producto Generico not found for this  name : : " + nombreProducto));
        return ResponseEntity.ok(productoGenerico);
    }

    @PostMapping("/nuevo")
    public ProductoGenerico createProductoGenerico(@Validated @RequestBody ProductoGenerico productoGenerico)
    {
        return productoGenericoRepository.save(productoGenerico);
    }

    @PutMapping("/list/{id}")
    public ResponseEntity <ProductoGenerico> updateProductoGenerico(@PathVariable(value = "id") Long idProductoGenerico
            , @Validated @RequestBody ProductoGenerico productoDetails) throws ResourceNotFoundException
    {
        ProductoGenerico productoGenerico = productoGenericoRepository.findById(idProductoGenerico)
                .orElseThrow(() -> new ResourceNotFoundException("Producto Generico not found for this  Id : : " + idProductoGenerico));

        productoGenerico.setTipoUnidad(productoDetails.getTipoUnidad());
        productoGenerico.setNombreProducto(productoDetails.getNombreProducto());
        productoGenerico.setDescripcion(productoDetails.getDescripcion());

        final ProductoGenerico updatedProducto = productoGenericoRepository.save(productoGenerico);
        return ResponseEntity.ok(updatedProducto);
    }

    @DeleteMapping("/list/{id}")
    public Map<String, Boolean> deleteProductoGenerico(@PathVariable (value = "id") Long idProductoGenerico)
        throws ResourceNotFoundException
    {
        ProductoGenerico productoGenerico = productoGenericoRepository.findById(idProductoGenerico)
                .orElseThrow(() -> new ResourceNotFoundException(("Producto Generico not found for this  Id : : " + idProductoGenerico)));
        productoGenericoRepository.delete(productoGenerico);
        Map<String, Boolean> response = new HashMap<>();
        response.put("The Producto Generico for this id : : " + idProductoGenerico + "has been deleted", Boolean.TRUE);
        return response;
    }



}
