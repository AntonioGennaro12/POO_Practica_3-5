const { Promociones, 
        DESC_POR_MONTO, DESC_POR_CANTIDAD, REINTEGRO_FIJO, DESC_POR_FECHA, 
        MONTO_COMPRA, FECHA_CUMPLE, 
        CLIENTES_TODOS, CLIENTES_RESID, CLIENTES_COMERC,
        UNICA_VEZ, VIG_PERPETUA } = require("./Promociones");

const nuestrasPromos = [  //constructor (nombre, tipo, disparo, dato1, dato2, premio, dirigida, vigencia)
    new Promociones("DescuentoMontoResid", DESC_POR_MONTO, MONTO_COMPRA, 1000, 0, 0.1, CLIENTES_RESID, VIG_PERPETUA),
    new Promociones("DescuentoCantResid", DESC_POR_CANTIDAD, MONTO_COMPRA, 2, 0, 0.15, CLIENTES_RESID, UNICA_VEZ),
    new Promociones("DiaDeCumpleaños", DESC_POR_FECHA, FECHA_CUMPLE, 0, "0000", 0.1, CLIENTES_RESID, VIG_PERPETUA),
    new Promociones("ReintegroEspTodos", REINTEGRO_FIJO, MONTO_COMPRA, 5000, 0, 700, CLIENTES_TODOS, UNICA_VEZ),
    new Promociones("DescEspCantComerc", DESC_POR_CANTIDAD, MONTO_COMPRA, 50, 0, 0.12, CLIENTES_COMERC, VIG_PERPETUA),
    new Promociones("DescEspDiaXComerc", DESC_POR_FECHA, MONTO_COMPRA, 25000, "1810", 0.15, CLIENTES_COMERC, UNICA_VEZ),
];

module.exports = nuestrasPromos;