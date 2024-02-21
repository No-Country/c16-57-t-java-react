package com.verdumarket.productoservice.Exceptions;

import org.springframework.boot.context.config.ConfigDataException;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(ConfigDataException.class)

    public ResponseEntity<?> resourceNotFoundException(ConfigDataResourceNotFoundException ex, WebRequest request){
        ErrorDetails errorDetails = new ErrorDetails();

        System.err.println(errorDetails + "ERROR");

        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }
}
