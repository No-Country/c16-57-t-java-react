package com.verdumarket.usuarioservice.Controladores;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.verdumarket.usuarioservice.DTO.UsuarioDTO;
import com.verdumarket.usuarioservice.Entidades.UsuarioEntity;
import com.verdumarket.usuarioservice.Excepciones.Personalizado;
import com.verdumarket.usuarioservice.Servicios.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    /**
     * Este método debe ser utilizado mediante API para persistir un usuario en la
     * base de datos
     * siempre y cuando los datos cumplan con las verificaciones.
     * 
     * @param nombre
     * @param contrasenia
     * @param email
     * @param direccion
     * @param celular
     * @throws Personalizado
     */
    @PostMapping("/crear")
    public ResponseEntity<UsuarioDTO> crearUser(@RequestBody UsuarioEntity usuario) throws Personalizado {
        try {
            UsuarioDTO usuarioDTO = usuarioService.crearUsuario(usuario);
            return ResponseEntity.ok(usuarioDTO);
        } catch (Personalizado e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Este método se debe utilizar para buscar todos los usuarios en la base de datos.
     * @return ResponseEntity ArrayList UsuarioDTO
     * @throws Personalizado
     */
    @GetMapping("/buscar")
    public ResponseEntity<ArrayList<UsuarioDTO>> buscarUsers() throws Personalizado {
        try {
            return ResponseEntity.ok(usuarioService.buscarTodosLosUsuarios());
        } catch (Personalizado e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Este método se debe utilizar para buscar un usuario por ID
     * @param id
     * @return ResponseEntity UsuarioDTO
     * @throws Personalizado
     */
    @GetMapping("/buscar/id/{id}")
    public ResponseEntity<UsuarioDTO> buscarUserPorId(@PathVariable Long id) throws Personalizado{
        try {
            return ResponseEntity.ok(usuarioService.buscarUsuarioPorId(id));
        } catch (Personalizado e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Este método se debe utilizar para buscar un usuario por email.
     * @param email
     * @return ResponseEntity UsuarioDTO
     * @throws Personalizado
     */
    @GetMapping("/buscar/email/{email}")
    public ResponseEntity<UsuarioDTO> buscarUserPorEmail(@PathVariable String email) throws Personalizado{
        try {
            return ResponseEntity.ok(usuarioService.buscarUsuarioPorEmail(email));
        } catch (Personalizado e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Este método se debe utilizar para actualizar un usuario en la base de datos
     * @param id
     * @param usuario
     * @return ResponseEntity UsuarioDTO
     * @throws Personalizado
     */
    @PutMapping("/actualizar/{id}")
    public ResponseEntity<UsuarioDTO> actualizarUser(@PathVariable Long id, @RequestBody UsuarioEntity usuario) throws Personalizado{
        try {
            return ResponseEntity.ok(usuarioService.actualizarUsuario(id, usuario));
        } catch (Personalizado e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Este método se debe utilizar para dar de baja un usuario en la base de datos.
     * @param id
     * @return ResponseEntity UsuarioDTO
     * @throws Personalizado
     */
    @PutMapping("/desactivar/{id}")
    public ResponseEntity<UsuarioDTO> desactivarUser(@PathVariable Long id) throws Personalizado{
        try {
            return ResponseEntity.ok(usuarioService.desactivarUsuario(id));
        } catch (Personalizado e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Este método se debe utilizar para reactivar un usuario en la base de datos.
     * @param id
     * @return ResponseEntity UsuarioDTO
     * @throws Personalizado
     */
    @PutMapping("/reactivar/{id}")
    public ResponseEntity<UsuarioDTO> reactivarUser(@PathVariable Long id) throws Personalizado{
        try {
            return ResponseEntity.ok(usuarioService.reactivarUsuario(id));
        } catch (Personalizado e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }


}
