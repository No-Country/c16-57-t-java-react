package com.verdumarket.usuarioservice.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.google.common.base.Optional;
import com.verdumarket.usuarioservice.Entidades.UsuarioEntity;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {

    @Query("SELECT e FROM UsuarioEntity e WHERE e.id = :id")
    Optional<UsuarioEntity> buscarPorId(Long id);

    @Query("SELECT e FROM UsuarioEntity e WHERE e.email = :email")
    Optional<UsuarioEntity> findByEmail(String email);

}
