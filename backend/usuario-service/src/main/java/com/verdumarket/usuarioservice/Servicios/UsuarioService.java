package com.verdumarket.usuarioservice.Servicios;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.base.Optional;
import com.verdumarket.usuarioservice.DTO.UsuarioDTO;
import com.verdumarket.usuarioservice.Entidades.UsuarioEntity;
import com.verdumarket.usuarioservice.Excepciones.Personalizado;
import com.verdumarket.usuarioservice.Interfaces.UsuarioServiceInterface;
import com.verdumarket.usuarioservice.Repositorios.UsuarioRepository;

import jakarta.transaction.Transactional;

@Service
public class UsuarioService implements UsuarioServiceInterface {

    @Autowired
    private UsuarioEntity usuarioEntity;

    @Autowired
    private UsuarioRepository usuarioRepository;

    /**
     * Este método se debe usar para validar que los datos de un usuario llegaron
     * correctamente, si un dato es invalido se lanzará una excepción.
     * 
     * @param contrasenia
     * @param email
     * @param nombre
     * @param direccion
     * @param celular
     * @throws Personalizado
     */
    public void validarDatos(String contrasenia, String email, String nombre, String direccion, String celular)
            throws Personalizado {
        if (contrasenia == null || contrasenia.isEmpty() || contrasenia.trim().isEmpty()) {
            throw new Personalizado("Error, la contraseña no puede ser nula o es invalida.");
        }
        if (email == null || email.isEmpty() || email.trim().isEmpty() || !email.contains("@")) {
            throw new Personalizado("Error, el email no puede ser nulo o es invalido.");
        }
        if (nombre == null || nombre.isEmpty() || nombre.trim().isEmpty()) {
            throw new Personalizado("Error, el nombre no puede ser nulo o es invalido.");
        }
        if (direccion == null || direccion.isEmpty() || direccion.trim().isEmpty()) {
            throw new Personalizado("Error, la direccion no puede ser nula o es invalida.");
        }
        if (celular == null || celular.isEmpty() || celular.trim().isEmpty()) {
            throw new Personalizado("Error, el celular no puede ser nulo o es invalido.");
        }
    }

    /**
     * Este método se debe usar para validar que el id de un usuario llego
     * correctamente, de lo contrario se lanzará una excepción.
     * 
     * @param id
     * @throws Personalizado
     */
    public void validarId(Long id) throws Personalizado {
        if (id == null) {
            throw new Personalizado("Error, el id no puede ser nulo o es invalido.");
        }
    }

    /**
     * Método para crear usuarios con una verificación de datos para evitar
     * persistencias invalidas, si algun dato es invalido, se lanzará una excepción.
     * 
     * @param contrasenia
     * @param email
     * @param nombre
     * @param direccion
     * @param celular
     * @throws Personalizado
     */
    @Transactional
    @Override
    public void crearUsuario(String contrasenia, String email, String nombre, String direccion, String celular)
            throws Personalizado {
        try {
            validarDatos(contrasenia, email, nombre, direccion, celular);
            usuarioEntity.setContrasenia(contrasenia);
            usuarioEntity.setEmail(email);
            usuarioEntity.setNombre(nombre);
            usuarioEntity.setDireccion(direccion);
            usuarioEntity.setCelular(celular);
            usuarioRepository.save(usuarioEntity);
        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("Hubo un problema al crear el usuario, porfavor, vuelva a intentarlo.");
        }
    }

    /**
     * Este método se debe usar para actualizar los datos de un usuario
     * existente, si no se encuentra el usuario se lanzará una excepción.
     * 
     * @param id
     * @param contrasenia
     * @param email
     * @param nombre
     * @param direccion
     * @param celular
     * @throws Personalizado
     */
    @Transactional
    @Override
    public void actualizarUsuario(Long id, String contrasenia, String email, String nombre, String direccion,
            String celular)
            throws Personalizado {
        try {
            validarId(id);
            validarDatos(contrasenia, email, nombre, direccion, celular);
            Optional<UsuarioEntity> var = usuarioRepository.buscarPorId(id);
            if (var.isPresent()) {
                UsuarioEntity usuario = var.get();
                usuario.setContrasenia(contrasenia);
                usuario.setEmail(email);
                usuario.setNombre(nombre);
                usuario.setDireccion(direccion);
                usuario.setCelular(celular);
                usuarioRepository.save(usuario);
            } else {
                throw new Personalizado("No se encontró el usuario con el correo electrónico especificado.");
            }
        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("El usuario no se pudo actualizar correctamente.");
        }

    }

    /**
     * Este método se debe usar para borrar un usuario existente que se busca por
     * id, si no se encuentra
     * se lanzará una excepción.
     * 
     * @param id
     * @throws Personalizado
     */
    @Transactional
    @Override
    public void borrarUsuario(Long id) throws Personalizado {
        try {
            validarId(id);
            Optional<UsuarioEntity> var = usuarioRepository.buscarPorId(id);
            if (var.isPresent()) {
                usuarioRepository.delete(var.get());
            } else {
                throw new Personalizado("Error, no se encontró un usuario con este email.");
            }
        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("Error al borrar el usuario, vuelva a intentar.");
        }
    }

    /**
     * Este método se debe usar para buscar un usuario existente por id, si no se
     * encuentra
     * se lanzará una excepción.
     * 
     * @param id
     * @return UsuarioDTO
     * @throws Personalizado
     */
    @Override
    public UsuarioDTO buscarUsuarioPorId(Long id) throws Personalizado {
        try {
            Optional<UsuarioEntity> var = usuarioRepository.buscarPorId(id);
            if (var.isPresent()) {
                UsuarioEntity usuario = var.get();
                return new UsuarioDTO(usuario.getNombre(), usuario.getEmail(), usuario.getDireccion(),
                        usuario.getCelular());
            } else {
                throw new Personalizado("Error, no se encontró el usuario con el siguiente id: " + id);
            }
        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("Error, vuelva a intentar porfavor.");
        }
    }

    /**
     * Este método se debe usar para buscar un usuario existente por email, si no se
     * encuentra
     * se lanzará una excepción.
     * 
     * @param email
     * @return UsuarioDTO
     * @throws Personalizado
     */
    @Override
    public UsuarioDTO buscarUsuarioPorEmail(String email) throws Personalizado {
        try {
            if (email == null || email.isEmpty() || email.trim().isEmpty() || !email.contains("@")) {
                throw new Personalizado("Error, el email no puede ser nulo o es invalido.");
            } else {
                Optional<UsuarioEntity> var = usuarioRepository.findByEmail(email);
                if (var.isPresent()) {
                    UsuarioEntity usuario = var.get();
                    return new UsuarioDTO(usuario.getNombre(), usuario.getEmail(), usuario.getDireccion(),
                            usuario.getCelular());
                } else {
                    throw new Personalizado("Error, no se encontró el usuario con este email.");
                }
            }
        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("Error, porfavor vuelva a intentarlo.");
        }

    }

    /**
     * Este método se debe usar para buscar todos los usuarios existentes, si no hay
     * usuarios, se lanzará una excepción.
     * 
     * @return ArrayList
     * @throws Personalizado
     */
    @Override
    public ArrayList<UsuarioDTO> buscarTodosLosUsuarios() throws Personalizado {
        try {
            List<UsuarioEntity> usuarios = usuarioRepository.findAll();
            if (usuarios.isEmpty()) {
                throw new Personalizado("Error, no se encontró ningun usuario.");
            }

            ArrayList<UsuarioDTO> usuariosDTO = new ArrayList<>();

            for (UsuarioEntity usuarioEntity : usuarios) {
                UsuarioDTO usuarioDTO = new UsuarioDTO(
                        usuarioEntity.getNombre(),
                        usuarioEntity.getEmail(),
                        usuarioEntity.getDireccion(),
                        usuarioEntity.getCelular());
                usuariosDTO.add(usuarioDTO);
            }

            return usuariosDTO;

        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("Error, vuelva a intentarlo.");
        }

    }

}
