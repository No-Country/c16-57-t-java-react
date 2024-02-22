package com.verdumarket.usuarioservice.Controladores;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    @GetMapping("/crear")
    public void crearUser() throws Personalizado {

    }




}
