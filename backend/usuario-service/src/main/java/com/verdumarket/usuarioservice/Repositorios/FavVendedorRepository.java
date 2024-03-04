package com.verdumarket.usuarioservice.Repositorios;

import com.google.common.base.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.verdumarket.usuarioservice.Entidades.FavoritosVendedor;

@Repository
public interface FavVendedorRepository extends JpaRepository<FavoritosVendedor, Long> {

    /**
     * Este método debe ser utilizado para buscar un comprador por su id
     * 
     * @param comprador
     * @return Optional FavoritosVendedor
     */
    @Query("SELECT e FROM FavoritosVendedor e WHERE e.comprador = :comprador")
    Optional<FavoritosVendedor> findByComprador(Long comprador);

    /**
     * Este método debe ser utilizado para buscar un vendedor por su id
     * 
     * @param vendedor
     * @return Optional FavoritosVendedor
     */
    @Query("SELECT e FROM FavoritosVendedor e WHERE e.vendedor = :vendedor")
    Optional<FavoritosVendedor> findByVendedor(Long vendedor);

    /**
     * Este método debe ser utilizado para encontrar la lista de un comprador con un vendedor especifico.
     * 
     * @param idComprador
     * @param idVendedor
     * @return Optional FavoritosVendedor
     */
    @Query("SELECT e FROM FavoritosVendedor e WHERE e.comprador.id = :idComprador AND e.vendedor.id = :idVendedor")
    Optional<FavoritosVendedor> findByCompradorAndVendedor(Long idComprador, Long idVendedor);
}
