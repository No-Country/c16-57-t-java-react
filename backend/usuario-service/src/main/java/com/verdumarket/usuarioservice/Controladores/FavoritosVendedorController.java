package com.verdumarket.usuarioservice.Controladores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.verdumarket.usuarioservice.DTO.FavoritosVendedorDTO;
import com.verdumarket.usuarioservice.DTO.UsuarioDTO;
import com.verdumarket.usuarioservice.Excepciones.Personalizado;
import com.verdumarket.usuarioservice.Servicios.FavVendedorService;

@Controller
@RequestMapping("/listaFav")
public class FavoritosVendedorController {
    
    @Autowired
    private FavVendedorService favVendedorService;

    /**
     * Este método API debe ser utilizado para agregar un vendedor a la lista de favoritos, de lo contrario
     * se eliminara al vendedor de la lista o se lanzara una excepción.
     * 
     * @param user
     * @return ResponseEntity FavoritosVendedorDTO
     * @throws Personalizado
     */
    @PostMapping("/agregar")
    public ResponseEntity<FavoritosVendedorDTO> agregarFavVendedor(@RequestBody FavoritosVendedorDTO user) throws Personalizado {
        try {
            return ResponseEntity.ok(favVendedorService.agregarFavVendedor(user));
        } catch (Personalizado e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Este método debe ser utilizado para borrar un vendedor de la lista de favoritos, de lo contrario, 
     * se agregara al vendedor o se lanzara una excepción.
     * 
     * @param user
     * @return ResponseEntity FavoritosVendedorDTO
     * @throws Personalizado
     */
    @PutMapping("/borrar")
    public ResponseEntity<FavoritosVendedorDTO> borrarFavVendedor(@RequestBody FavoritosVendedorDTO user) throws Personalizado {
        try {
            return ResponseEntity.ok(favVendedorService.borrarFavVendedor(user));
        } catch (Personalizado e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    /**
     * Este método debe ser utilizado para buscar todos los vendedores en la lista de favoritos de un comprador.
     * 
     * @param user
     * @return ResponseEntity UsuarioDTO
     * @throws Personalizado
     */
    @GetMapping("/buscar")
    public ResponseEntity<UsuarioDTO> buscarFavVendedor(@RequestBody FavoritosVendedorDTO user) throws Personalizado {
        try {
            return ResponseEntity.ok(favVendedorService.buscarFavVendedor(user));
        } catch (Personalizado e) {
            return ResponseEntity.badRequest().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

}
