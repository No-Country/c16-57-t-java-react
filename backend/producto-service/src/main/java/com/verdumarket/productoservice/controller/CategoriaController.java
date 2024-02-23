package com.verdumarket.productoservice.controller;

import com.verdumarket.productoservice.Exceptions.ResourceNotFoundException;
import com.verdumarket.productoservice.model.Categoria;
import com.verdumarket.productoservice.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categoria")
public class CategoriaController {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @GetMapping("/listarCategoria")
    public List<Categoria> categoriaGetAll()
    {
        return categoriaRepository.findAll();
    }

    @GetMapping("/listarCategoriaId/{id}")
    public ResponseEntity<Categoria> getCategoriaId(@PathVariable(value="id") Long idCategoria)
        throws ResourceNotFoundException {

        Categoria categoria = categoriaRepository.findById(idCategoria).orElseThrow(() ->
                new ResourceNotFoundException("Categoría no encontrada para el Id : :" + idCategoria));
        return ResponseEntity.ok(categoria);
    }

    @GetMapping(value = "/listarCategoriaNombre/{nombre}", produces = "application/json")
    public ResponseEntity<Categoria> getCategoriaNombre(@PathVariable(value = "nombre") String nombre)
        throws ResourceNotFoundException {

        Categoria categoria = categoriaRepository.findByNombre(nombre).orElseThrow(() ->
                new ResourceNotFoundException("Categoría no encontrada para el Id : :" + nombre));
        return ResponseEntity.ok(categoria);
    }


}
