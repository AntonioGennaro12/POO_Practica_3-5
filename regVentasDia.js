const { clientes, Juan, Pedro, Carlos, Luis, AlmacenDonPepe, MercadoTito } = require("./defClientes.js");
const productos = require("./defProductos.js");
//
const ventasDia01   =   [   [productos[0],  1, Juan],               // Yerba  x1 a Juan
                            [productos[3],  1, Carlos],             // Té     x1 a Carlos                             
                            [productos[1],  1, Luis],               // Azucar x1 a Luis
                            [productos[0], 50, AlmacenDonPepe],     // Yerba x 50 
                        ];  

const ventasDia02   =   [   [productos[0],  2, Pedro],              // Yerba  x2 a Pedro
                            [productos[2],  1, Luis],               // Café   x1 a Luis
                            [productos[1], 50, AlmacenDonPepe],     // Azucar x 50 a DP
                            [productos[2], 80, MercadoTito],        // Café x 80  a MT
                        ];   

const ventasDia03   =   [   [productos[1],  2, Juan],               // Azucar x2 a Juan
                            [productos[3],  3, Pedro],              // Té     x3 a Pedro 
                            [productos[3], 80, MercadoTito],        // Té     80 a MT
                            [productos[2], 20, AlmacenDonPepe],     // Café   20 a DP
                        ];

const ventasDia04   =   [   [productos[2], 2, Carlos],              // Café   x2 a Carlos
                            [productos[3], 3, Luis],                // Té     x3 a Luis 
                            [productos[0], 3, Carlos],              // Yerba  x3 a Carlos
                            [productos[3], 20, AlmacenDonPepe],     // Té     20 a DP
                        ];
                             
const ventasDia05   =   [   [productos[3], 2, Juan],                // Té     x2 a Juan
                            [productos[2], 2, Pedro],               // Café   x2 a Pedro 
                            [productos[0], 2, Luis],                // Yerba  x2 a Luis
                            [productos[1], 50, MercadoTito],        // Azucar x50 a MT                        
                        ];

const ventasDia06   =   [   [productos[2], 1, Luis],                // Café   x1 a Luis
                            [productos[1], 3, Juan],                // Azucar x1 a  (era 1)
                            [productos[2], 4, Carlos],              // Café   x2 a Carlos (era 2)
                            [productos[0], 50, MercadoTito],        // Yerba  x50 a MT     
                        ];    
                            
// ....
// .... AGREGAR MAS DÍAS o ventas dentro del día

// Puntero a Ventas x día  
const ventasDia  = [ventasDia01, ventasDia02, ventasDia03, 
                    ventasDia04, ventasDia05, ventasDia06 ];
// Agregar en el arreglo, todos los días 
//
module.exports = ventasDia;