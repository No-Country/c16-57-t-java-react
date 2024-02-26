package com.verdumarket.productoservice.controller;

import com.verdumarket.productoservice.Exceptions.ResourceNotFoundException;
import com.verdumarket.productoservice.model.Categoria;
import com.verdumarket.productoservice.model.ProductoGenerico;
import com.verdumarket.productoservice.repository.ProductoGenericoRepository;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/productos")
public class ProductoGenericoController {

    @Autowired
    private ProductoGenericoRepository productoGenericoRepository;


    // Listar todos los Productos Genericos de la bd

    @GetMapping("/listarProductosGen")
    public List<ProductoGenerico> productoGenericoGetAll() throws ResourceNotFoundException
    {
        new ResourceNotFoundException("Productos encontrados: : ");
        return productoGenericoRepository.findAll();
    }

    // Buscar un único Producto Generico por Id
    @GetMapping("/listarProductosGenId/{id}")
    public ResponseEntity<ProductoGenerico> getProductoGenericoId(@PathVariable(value = "id") Long idProductoGenerico)
            throws ResourceNotFoundException {

        ProductoGenerico productoGenerico = productoGenericoRepository.findById(idProductoGenerico).orElseThrow(() ->
                new ResourceNotFoundException("Producto Generico not found for this  Id : : " + idProductoGenerico));
        return ResponseEntity.ok(productoGenerico);
    }

    // Obtener lista de todos los Productos Genericos por el nombre del producto
    @GetMapping("/listarProductosGenNombre/{nombreProducto}")
    public ResponseEntity<List<ProductoGenerico>> getProductoGenericoNombre(@PathVariable(value = "nombreProducto") String nombreProducto) throws ResourceNotFoundException {

        List<ProductoGenerico> productoGenerico = productoGenericoRepository.findByNombreProductoContaining(nombreProducto);

        if (productoGenerico.isEmpty()) {
            throw new ResourceNotFoundException("Producto Generico not found for this name: " + nombreProducto);
        }
        return ResponseEntity.ok(productoGenerico);
    }


    // Obtener lista de todos los Productos genericos por el tipo de unidad
    @GetMapping("/listarProductosGenTipoUnidad/{tipoUnidad}")
    public ResponseEntity <List<ProductoGenerico>> productoGenericoGetByTipoUnidad(@PathVariable(name = "tipoUnidad") String tipoUnidad)
        throws ResourceNotFoundException {

        List<ProductoGenerico> productoGenerico = productoGenericoRepository.findByTipoUnidad(tipoUnidad);

        if (productoGenerico.isEmpty()){
            throw new ResourceNotFoundException("Producto Generico not found for this Tipo de Unidad : : " + tipoUnidad);
        }

        return ResponseEntity.ok(productoGenerico);
    }

    // Listar Producto Generico por id Categoria
    @GetMapping("/listarProductosGenCategoria/{categoria}")
    public ResponseEntity <List<ProductoGenerico>> productoGenericoGetByCategoria(@PathVariable(name = "categoria") Categoria categoria)
        throws ResourceNotFoundException {

        List<ProductoGenerico> productoGenericos = productoGenericoRepository.findByCategoria(categoria);

        if(productoGenericos.isEmpty()){
            throw new ResourceNotFoundException("Productos genericos no encontrados para la siguiente categoria : :" + categoria);
        }
        return ResponseEntity.ok(productoGenericos);
    }

    // Crear nuevo Producto Generico
    @PostMapping("/nuevoProductosGen")
    public ProductoGenerico createProductoGenerico(@Validated @RequestBody ProductoGenerico productoGenerico)
    {
        return productoGenericoRepository.save(productoGenerico);
    }

    // Editar Producto Generico por Id
    @PutMapping("/editarProductosGen/{id}")
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

    // Eliminar un producto generico por Id
    @DeleteMapping("/borrarProductosGenId/{id}")
    public Map<String, Boolean> deleteProductoGenerico(@PathVariable (value = "id") Long idProductoGenerico)
        throws ResourceNotFoundException
    {
        ProductoGenerico productoGenerico = productoGenericoRepository.findById(idProductoGenerico)
                .orElseThrow(() -> new ResourceNotFoundException(("Producto Generico not found for this  Id : : " + idProductoGenerico)));
        productoGenericoRepository.delete(productoGenerico);
        Map<String, Boolean> response = new HashMap<>();
        response.put("The Producto Generico for this id : " + idProductoGenerico + "Deleted", Boolean.TRUE);
        return response;
    }



}
