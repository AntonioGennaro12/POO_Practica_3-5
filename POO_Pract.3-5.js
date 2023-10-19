// POO Ejercicio 3-4
// Importo las definiciones de clases
const VentasDelDia = require("./VentasDelDia.js");
const cargaVentasDia = require("./cargaVentasDia.js");
const clientes = require("./defClientes.js");
const productos = require("./defProductos.js");
const ventasDeDia = require("./defVentasDelDia.js");
const ventasDia = require("./regVentasDia.js");
const {reporteClientes, reporteProductos, reportePromociones,
            reporteVentasA, estadoProductosClientes} = require("./rutinas.js");
//
//  INICIO 
//  SUPERMERCADO DEVS (Manejo de Stock)
//
/// Presentación de Productos y Clientes registrados...
//
console.log("DÍA '0' PRESENTACIÓN DE PRODUCTOS, PROMOCIONES Y CLIENTES");
reporteProductos();
reportePromociones();
reporteClientes();
//
// Ventas x DÍA
// Realiza un reporte de todos los días de operación:
//
for (let i=0; i< ventasDia.length; i++) {
    console.log("Ventas del DÍA: "+(i+1));
    cargaVentasDia(i);
    estadoProductosClientes();
}
reportePromociones();

/* Fin */


