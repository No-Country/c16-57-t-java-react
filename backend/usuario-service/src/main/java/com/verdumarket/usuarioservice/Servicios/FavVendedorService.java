package com.verdumarket.usuarioservice.Servicios;

import com.google.common.base.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.verdumarket.usuarioservice.DTO.FavoritosVendedorDTO;
import com.verdumarket.usuarioservice.DTO.UsuarioDTO;
import com.verdumarket.usuarioservice.Entidades.FavoritosVendedor;
import com.verdumarket.usuarioservice.Entidades.UsuarioEntity;
import com.verdumarket.usuarioservice.Enums.Estado;
import com.verdumarket.usuarioservice.Excepciones.Personalizado;
import com.verdumarket.usuarioservice.Interfaces.FavVendedorServiceInterface;
import com.verdumarket.usuarioservice.Repositorios.FavVendedorRepository;
import com.verdumarket.usuarioservice.Repositorios.UsuarioRepository;

@Service
public class FavVendedorService implements FavVendedorServiceInterface {

    @Autowired
    private FavVendedorRepository favVendedorRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    /**
     * Este método debe ser utilizado para agregar un vendedor a la lista de favoritos, de lo contrario
     * se elimininará al vendedor de la lista o se lanzará una excepción.
     * 
     * @param
     * @return FavoritosVendedorDTO
     * @throws Personalizado
     */
    @Override
    public FavoritosVendedorDTO agregarFavVendedor(FavoritosVendedorDTO user) throws Personalizado {
        try {
            Optional<FavoritosVendedor> var = favVendedorRepository.findByCompradorAndVendedor(user.getIdComprador(),
                    user.getIdVendedor());

            if (!var.isPresent()) {
                Optional<UsuarioEntity> comprador = usuarioRepository.buscarPorId(user.getIdComprador());
                Optional<UsuarioEntity> vendedor = usuarioRepository.buscarPorId(user.getIdVendedor());

                FavoritosVendedor listaVendedores = new FavoritosVendedor(comprador.get(), vendedor.get(),
                        Estado.ACTIVO);

                favVendedorRepository.save(listaVendedores);

                return new FavoritosVendedorDTO(vendedor.get().getId(), comprador.get().getId());

            } else {
                return borrarFavVendedor(user);
            }
        } catch (Personalizado e) {
            System.out.println("Error: " + e.getMessage());
            throw new Personalizado("Error, vuelva a intentarlo porfavor.");
        }
    }

    /**
     * Este método debe ser utilizado para borrar un vendedor de la lista, de lo contrario, se agregará al
     * vendedor o se lanzará una excepción.
     * 
     * @param
     * @return FavoritosVendedorDTO
     * @throws Personalizado
     */
    @Override
    public FavoritosVendedorDTO borrarFavVendedor(FavoritosVendedorDTO user) throws Personalizado {
        try {
            Optional<FavoritosVendedor> var = favVendedorRepository.findByCompradorAndVendedor(user.getIdComprador(),
                    user.getIdVendedor());

            if (var.isPresent()) {

                FavoritosVendedor listaVendedores = var.get();

                listaVendedores.setEstado(Estado.INACTIVO);

                favVendedorRepository.save(listaVendedores);

                return new FavoritosVendedorDTO(listaVendedores.getVendedor().getId(),
                        listaVendedores.getComprador().getId());

            } else {
                return agregarFavVendedor(user);
            }
        } catch (Personalizado e) {
            System.out.println("Error: " + e.getMessage());
            throw new Personalizado("Error, vuelva a intentarlo porfavor.");
        }

    }

    /**
     * Este método debe ser utilizado para buscar todos los vendedores que estén en la lista de favoritos
     * de un comprador, de lo contrario se lanzará una excepción.
     * 
     * @param
     * @return UsuarioDTO
     * @throws Personalizado
     */
    @Override
    public UsuarioDTO buscarFavVendedor(FavoritosVendedorDTO user) throws Personalizado {
        try {
            Optional<FavoritosVendedor> var = favVendedorRepository.findByCompradorAndVendedor(user.getIdComprador(),
                    user.getIdVendedor());
            if (var.isPresent()) {
                Optional<UsuarioEntity> vendedor = usuarioRepository.buscarPorId(user.getIdVendedor());

                return new UsuarioDTO(vendedor.get().getNombre(), vendedor.get().getEmail(),
                        vendedor.get().getDireccion(), vendedor.get().getCelular());
            } else {
                throw new Personalizado("No tienes ningun vendedor favorito.");
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
            throw new Personalizado("Error, vuelva a intentarlo porfavor.");
        }
    }
}
