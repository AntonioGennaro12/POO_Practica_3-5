//const Cliente  = require("./ClienteResidencial.js");
//
class Producto {
    #nombreProducto;        // puede haber muchos procuctos
    #precioProducto;        // valor numérico
    #vendidoA;              // Array bi-dimensional pueden ser varios
    #cantidadStock; 
    #stockMinimo;        // cantidad si menos que 2 hay que avisar

    constructor (nombre, precio, cantidad, stockMin) {
        this.#nombreProducto = nombre;        // puede haber muchos procuctos
        this.#precioProducto = precio;        // valor numérico
        this.#cantidadStock = cantidad;       // valor numérico
        this.#stockMinimo   = stockMin;       // valor 
        this.#vendidoA      = [] ;            // a uno o mas clientes
    }
    
    setNombreProducto (nombr) {
        this.#nombreProducto = nombr;   // se podría hacer una para poner en cero
    }

    getNombreProducto() {
        return (this.#nombreProducto);
    }

    setPrecioProducto (prec) {
        this.#precioProducto = prec;   // se podría hacer una para poner en cero
    }

    getPrecioProducto() {
        return (this.#precioProducto);
    }

    setCantidadStock (cant) {
        this.#cantidadStock = cant ;   // stock
    }

    getCantidadStock() {
        return (this.#cantidadStock);          // devuelve stock
    }

    setStockMinimo(cant) {
        this.#stockMinimo = cant ;   // stock
    }
    
    getStockMinimo() {
        return (this.#stockMinimo);          // devuelve stock
    }
    

    setVendidoA (nomb, cant) {
        let compra = [];
        compra.Cliente = nomb;
        compra.Cantidad = cant;
        this.#vendidoA.push(compra) ;   // pueden ser varios
    }

    getVendidoA() {
        return (this.#vendidoA);                // devuelve un array
    }

    /// Procedimientos
    cualEstuNombre () {
        console.log("Producto: "+this.getNombreProducto());
    }

    venderACliente (clien, cant) {
        console.log("Producto: " + this.#nombreProducto + " vende: " + cant + 
                    " unidad/es a cliente: "+clien.getNombreCliente() );
        clien.comprarProducto (this, cant);
        this.setVendidoA((clien.getNombreCliente()), cant); 
        this.#cantidadStock -= cant;
        if (this.#cantidadStock <= this.#stockMinimo) {
            console.log("Alerta Stock Mínimo!! Producto: "+this.#nombreProducto+" cant. "+this.#cantidadStock);
        }
    }
       
    cuantoStockTienes () {
        console.log("Producto: "+this.#nombreProducto+" en stock: "+this.#cantidadStock+" unidad/es");
    }

    reporteDeVentas() {
        console.log("Reporte de Ventas Producto: "+this.#nombreProducto+" Vendido a: ");
        console.table(this.#vendidoA);
    }
   
}

module.exports = Producto;
