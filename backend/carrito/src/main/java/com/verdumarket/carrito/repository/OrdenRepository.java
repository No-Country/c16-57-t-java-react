package com.verdumarket.carrito.repository;

import com.verdumarket.carrito.model.EstadoOrden;
import com.verdumarket.carrito.model.Orden;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.function.Function;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface OrdenRepository extends JpaRepository<Orden, Long> {

    List<Orden> findAllByIdCompradorAndEstadoOrdenNot(Long idComprador, EstadoOrden estadoOrden);

    List<Orden> findAllByIdVendedorAndEstadoOrdenNot(Long idVendedor, EstadoOrden estadoOrden);
}

