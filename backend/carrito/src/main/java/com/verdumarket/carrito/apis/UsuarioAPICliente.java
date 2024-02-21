package com.verdumarket.carrito.apis;

import com.verdumarket.carrito.dto.UsuarioDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "usuarioapi", url="http://localhost:9001/")
public interface UsuarioAPICliente {

    @GetMapping("obtenerusuarioporid/{id}")
    public UsuarioDTO getUsuario (@PathVariable ("id") Long idUsuario);
}
