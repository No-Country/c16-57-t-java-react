export const historial = [
    {
      "idOrden": 1,
      "idComprador": 101,
      "idVendedor": 201,
      "celularVendedor": "123456789",
      "precio": 50.00,
      "direccion": "Calle Principal 123",
      "celularComprador": "987654321",
      "nombre": "Juan Torrez Alba",
      "carrito": {
        "idCarrito": 1,
        "idVendedor": 201,
        "idComprador": 101,
        "precioTotal": 125.50,
        "estadoCarrito": "ACTIVO",
        "listadoItems": [
          {
            "idItemPorCarrito": 1,
            "idProducto": 1001,
            "nombreProducto": "Naranjas del Oriente",
            "precio": 50.00,
            "cantidad": 2,
            "estadoItem": "ACTIVO"
          },
          {
            "idItemPorCarrito": 2,
            "idProducto": 1002,
            "nombreProducto": "Uvas sel Tarija",
            "precio": 25.50,
            "cantidad": 1,
            "estadoItem": "ACTIVO"
          }
        ]
      },
      "estadoOrden": "ENVIADO",
      "fechaHora": "2022-02-20T10:00:00Z"
    },
    {
      "idOrden": 2,
      "idComprador": 101,
      "idVendedor": 202,
      "celularVendedor": "987654321",
      "precio": 30.00,
      "direccion": "Avenida Secundaria 456",
      "celularComprador": "123456789",
      "nombre": "María del Carmen Viza",
      "carrito": {
        "idCarrito": 2,
        "idVendedor": 202,
        "idComprador": 102,
        "precioTotal": 75.20,
        "estadoCarrito": "INACTIVO",
        "listadoItems": [
          {
            "idItemPorCarrito": 3,
            "idProducto": 1003,
            "nombreProducto": "Manzanas de Santa Cruz",
            "precio": 30.00,
            "cantidad": 1,
            "estadoItem": "ACTIVO"
          },
          {
            "idItemPorCarrito": 4,
            "idProducto": 1004,
            "nombreProducto": "Plátanos del Interior",
            "precio": 45.20,
            "cantidad": 1,
            "estadoItem": "ACTIVO"
          }
        ]
      },
      "estadoOrden": "PENDIENTE",
      "fechaHora": "2022-02-20T11:00:00Z"
    }
  ]
  
  
  
  
  