package com.verdumarket.usuarioservice.Servicios;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.common.base.Optional;
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
     * correctamente, de lo contrario
     * se lanzará una excepción.
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
     * Este método se debe usar para validar que el email de un usuario llego
     * correctamente, de lo contrario se lanzará una excepción.
     * 
     * @param email
     * @throws Personalizado
     */
    public void validarEmail(String email) throws Personalizado {
        if (email == null || email.isEmpty() || email.trim().isEmpty() || !email.contains("@")) {
            throw new Personalizado("Error, el email no puede ser nulo o es invalido.");
        }
    }

    /**
     * Método para crear usuarios con una verificación de datos para evitar
     * persistencias invalidas.
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
     * existente, de lo contrario se lanzará una excepción.
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
    public void actualizarUsuario(String contrasenia, String email, String nombre, String direccion, String celular)
            throws Personalizado {
        try {
            validarDatos(contrasenia, email, nombre, direccion, celular);
            Optional<UsuarioEntity> var = usuarioRepository.findByEmail(email);
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
     * Este método se debe usar para borrar un usuario existente, de lo contrario
     * se lanzará una excepción.
     * 
     * @param email
     */
    @Transactional
    @Override
    public void borrarUsuario(String email) throws Personalizado {
        try {
            validarEmail(email);
            Optional<UsuarioEntity> var = usuarioRepository.findByEmail(email);
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
     * Este método se debe usar para buscar un usuario existente, de lo contrario
     * se lanzará una excepción.
     * 
     * @param email
     * @return UsuarioEntity
     * @throws Personalizado
     */
    @Override
    public UsuarioEntity buscarUsuario(String email) throws Personalizado {
        try {
            validarEmail(email);
            Optional<UsuarioEntity> var = usuarioRepository.findByEmail(email);
            if (var.isPresent()) {
                UsuarioEntity usuario = new UsuarioEntity();
                usuario = var.get();
                return usuario;
            } else {
                throw new Personalizado("Error, no se encontró el usuario con este email.");
            }
        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("Error, porfavor vuelva a intentarlo.");
        }

    }

    /**
     * Este método se debe usar para buscar todos los usuarios existentes, si no hay
     * usuarios, se
     * arrojará una excepción.
     * 
     * @return ArrayList
     */
    @Override
    public ArrayList<UsuarioEntity> buscarTodosLosUsuarios() throws Personalizado {
        try {
            List<UsuarioEntity> usuarios = usuarioRepository.findAll();
            if (usuarios.isEmpty()) {
                throw new Personalizado("Error, no se encontró ningun usuario.");
            }
            return new ArrayList<>(usuarios);
        } catch (Personalizado e) {
            System.out.println(e.getMessage());
            throw new Personalizado("Error, vuelva a intentarlo.");
        }

    }
}
