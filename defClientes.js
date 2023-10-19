const ClienteComercial = require("./ClienteComercial.js");
const ClienteResidencial = require("./ClienteResidencial.js");
const nuestrasPromos = require("./defPromociones.js");

//  AQUÍ SE GENERAN LOS CLIENTES (solamente agregar a continuacíon dentro de los corchetes)
// clientes residenciales "Nombre", "saldo", lista de promos (sino null) y "fecha de nac "ddmm");
const clientes = [ new ClienteResidencial("Juan", 0, nuestrasPromos, "2505" ),  // 
                   new ClienteResidencial("Pedro", 0, nuestrasPromos, "1810" ),
                   new ClienteResidencial("Carlos", 0, nuestrasPromos, "1708"),
                   new ClienteResidencial("Luis", 0, null, "1210"),   
                   new ClienteComercial("AlmacenDonPepe", 0, nuestrasPromos, 0.25),
                   new ClienteComercial("MercadoTito", 0, null, 0.25),
                 ];
//
// Definición de los nombres
const Juan              = clientes[0];
const Pedro             = clientes[1];
const Carlos            = clientes[2];
const Luis              = clientes[3];
const AlmacenDonPepe    = clientes[4];
const MercadoTito       = clientes[5];


// Exportación de objetos
module.exports = { clientes, Juan, Pedro, Carlos, Luis, 
                   AlmacenDonPepe, MercadoTito };
