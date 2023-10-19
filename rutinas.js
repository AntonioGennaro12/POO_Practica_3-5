const {clientes} = require("./defClientes.js");
const productos = require("./defProductos.js");
const nuestrasPromos = require("./defPromociones.js");
const NuestrosClientes = require("./NuestrosClientes.js");

function reporteClientes() {
    for(let i=0; i  <clientes.length; i++) {
    clientes[i].montoGastado();
    clientes[i].listadoDePromociones();
    }
}

function reporteProductos() {
    for(let i=0; i < productos.length; i++)
    productos[i].cuantoStockTienes();
}

function reportePromociones() {
    for(let i=0; i < nuestrasPromos.length; i++)
    nuestrasPromos[i].cualEstuNombreyDescricion();
}

function reporteVentasA() {
    for(let i=0; i < productos.length; i++)
    productos[i].reporteDeVentas();
}

function estadoProductosClientes() {
    reporteClientes();
    reporteProductos();
    reporteVentasA();
}

module.exports = {  reporteClientes,
                    reporteProductos,
                    reportePromociones,
                    reporteVentasA,
                    estadoProductosClientes };