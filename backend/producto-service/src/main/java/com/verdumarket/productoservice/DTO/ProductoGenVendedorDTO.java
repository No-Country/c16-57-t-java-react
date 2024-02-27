package com.verdumarket.productoservice.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductoGenVendedorDTO {
    private Long idProductoVendedor;
    private boolean estadoProducto;
    private Long idVendedor;
    private BigDecimal precioUnidad;
    private int stock;
    private Long idProducto;
    private String descripcionProductoGenerico;
    private String nombreProductoGenerico;
    private String tipoUnidadProductoGenerico;
    private Long categoriaProductoGenerico;

}
