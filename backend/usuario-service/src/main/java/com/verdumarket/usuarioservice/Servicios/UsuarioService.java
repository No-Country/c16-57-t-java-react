package com.verdumarket.usuarioservice.Servicios;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.base.Optional;
import com.verdumarket.usuarioservice.DTO.UsuarioDTO;
import com.verdumarket.usuarioservice.Entidades.UsuarioEntity;
import com.verdumarket.usuarioservice.Enums.Estado;
import com.verdumarket.usuarioservice.Excepciones.Personalizado;
import com.verdumarket.usuarioservice.Interfaces.UsuarioServiceInterface;
import com.verdumarket.usuarioservice.Repositorios.UsuarioRepository;

import jakarta.transaction.Transactional;

@Service
public class UsuarioService implements UsuarioServiceInterface {

    @Autowired
    private UsuarioRepository usuarioRepository;

    /**
     * Este método se debe usar para validar que los datos de un usuario llegaron
     * correctamente, si un dato es invalido se lanzará una excepción.
     * 
     * @param usuario
     * @throws Personalizado
     */
    public void validarDatos(UsuarioEntity usuario)
            throws Personalizado {
        if (usuario.getContrasenia().isEmpty() || usuario.getContrasenia().trim().isEmpty()) {
            throw new Personalizado("Error, la contraseña no puede ser nula o es invalida.");
        }
        if (usuario.getEmail().isEmpty() || usuario.getEmail().trim().isEmpty()
                || !usuario.getEmail().contains("@")) {
            throw new Personalizado("Error, el email no puede ser nulo o es invalido.");
        }
        if (usuario.getNombre().isEmpty() || usuario.getNombre().trim().isEmpty()) {
            throw new Personalizado("Error, el nombre no puede ser nulo o es invalido.");
        }
        if (usuario.getDireccion().isEmpty() || usuario.getDireccion().trim().isEmpty()) {
            throw new Personalizado("Error, la direccion no puede ser nula o es invalida.");
        }
        if (usuario.getCelular().isEmpty() || usuario.getCelular().trim().isEmpty()) {
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
     * Este método se debe utilizar para validar el estado de un usuario
     * 
     * @param usuario
     * @throws Personalizado
     */
    public void validarEstado(UsuarioEntity usuario) throws Personalizado {
        if (usuario.getEstado() == Estado.INACTIVO) {
            throw new Personalizado("Error, este usuario está dado de baja.");
        }
    }

    /**
     * Método para crear usuarios con una verificación de datos para evitar
     * persistencias invalidas, si algun dato es invalido, se lanzará una excepción.
     * 
     * @param usuario
     * @return UsuarioDTO
     * @throws Personalizado
     */
    @Transactional
    @Override
    public UsuarioDTO crearUsuario(UsuarioEntity usuario)
            throws Personalizado {
        try {
            validarDatos(usuario);
            UsuarioEntity usuarioDB = new UsuarioEntity(usuario.getNombre(), usuario.getEmail(),
                    usuario.getContrasenia(), usuario.getDireccion(), usuario.getCelular(), false, Estado.ACTIVO);
            usuarioRepository.save(usuarioDB);
            return new UsuarioDTO(usuario.getNombre(), usuario.getEmail(), usuario.getDireccion(),
                    usuario.getCelular());
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
     * @param usuario
     * @return UsuarioDTO
     * @throws Personalizado
     */
    @Transactional
    @Override
    public UsuarioDTO actualizarUsuario(Long id, UsuarioEntity usuario)
            throws Personalizado {
        try {            
            validarId(id);
            validarDatos(usuario);
            Optional<UsuarioEntity> var = usuarioRepository.buscarPorId(id);
            validarEstado(var.get());
            System.out.println("pasó por el service.");
            if (var.isPresent()) {
                UsuarioEntity usuarioDB = var.get();
                usuarioDB.setContrasenia(usuario.getContrasenia());
                usuarioDB.setEmail(usuario.getEmail());
                usuarioDB.setNombre(usuario.getNombre());
                usuarioDB.setDireccion(usuario.getDireccion());
                usuarioDB.setCelular(usuario.getCelular());
                usuarioRepository.save(usuarioDB);
                return new UsuarioDTO(usuario.getNombre(), usuario.getEmail(), usuario.getDireccion(),
                        usuario.getCelular());
            } else {
                throw new Personalizado("No se encontró el usuario con el correo electrónico especificado.");
            }
        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("El usuario no se pudo actualizar correctamente.");
        }

    }

    /**
     * Este método se debe usar para desactivar un usuario, se busca por
     * id, si no se encuentra o ya está inactivo, se lanzará una excepción.
     * 
     * @param id
     * @return UsuarioDTO
     * @throws Personalizado
     */
    @Transactional
    @Override
    public UsuarioDTO desactivarUsuario(Long id) throws Personalizado {
        try {
            validarId(id);
            Optional<UsuarioEntity> var = usuarioRepository.buscarPorId(id);
            if (var.isPresent()) {
                UsuarioEntity usuario = var.get();
                validarEstado(usuario);
                usuario.setEstado(Estado.INACTIVO);
                usuarioRepository.save(usuario);
                return new UsuarioDTO(usuario.getNombre(), usuario.getEmail(), usuario.getDireccion(),
                        usuario.getCelular());
            } else {
                throw new Personalizado("Error, no se encontró un usuario con este id: " + id);
            }
        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("Error al borrar el usuario, vuelva a intentar.");
        }
    }

    /**
     * Este método se debe utilizar para reactivar un usuario, se busca por id, en
     * caso de no ser encontrado
     * o de que el usuario ya esté activo, se lanzará una excepción.
     * 
     * @param id
     * @return UsuarioDTO
     * @throws Personalizado
     */
    @Transactional
    @Override
    public UsuarioDTO reactivarUsuario(Long id) throws Personalizado {
        try {
            validarId(id);
            Optional<UsuarioEntity> var = usuarioRepository.buscarPorId(id);
            if (var.isPresent()) {
                UsuarioEntity usuario = var.get();
                if (usuario.getEstado() == Estado.ACTIVO) {
                    throw new Personalizado("Este usuario ya está activo.");
                }
                usuario.setEstado(Estado.ACTIVO);
                usuarioRepository.save(usuario);
                return new UsuarioDTO(usuario.getNombre(), usuario.getEmail(), usuario.getDireccion(),
                        usuario.getCelular());
            } else {
                throw new Personalizado("Error, no se encontró un usuario con este id: " + id);
            }
        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("Error al reactivar el usuario, vuelva a intentar.");
        }
    }

    /**
     * Este método se debe usar para buscar un usuario por id, si no se
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
                validarEstado(usuario);
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
     * Este método se debe usar para buscar un usuario por email, si no se
     * encuentra se lanzará una excepción.
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
                    validarEstado(usuario);
                    return new UsuarioDTO(usuario.getNombre(), usuario.getEmail(), usuario.getDireccion(),
                            usuario.getCelular());
                } else {
                    throw new Personalizado("Error, no se encontró el usuario con este email: " + email);
                }
            }
        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("Error, porfavor vuelva a intentarlo.");
        }

    }

    /**
     * Este método se debe usar para buscar todos los usuarios, si no hay
     * usuarios, se lanzará una excepción.
     * 
     * @return ArrayList UsuarioDTO
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
