package com.verdumarket.usuarioservice.Repositorios;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.google.common.base.Optional;
import com.verdumarket.usuarioservice.Entidades.UsuarioEntity;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {

    public Optional<UsuarioEntity> findByEmail(String email);

}
