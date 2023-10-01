const Producto  = require("./Producto.js");

//const Producto  = require("./Producto.js");
//
class NuestrosClientes {
    #nombreCliente;    // nombre completo 
    _montoComprado;    //acumulado por cliente 
     
    constructor(nombre, comprado) {
        this.#nombreCliente = nombre;
        this._montoComprado = comprado;   // variable protegida con trtamiento especial
        
    }

    setNombreCliente (nombre) {
        this.#nombreCliente = nombre;
    }

    getNombreCliente() {
        return (this.#nombreCliente);
    }

    setMontoComprado (monto) {
        this._montoComprado += monto;   // se podría hacer una para poner en cero
    }

    getMontoComprado() {
        return (this._montoComprado);
    }

// Procedimientos

    cualEstuNombre () {
        console.log("El Nombre de cliente es: "+this.getNombreCliente());
    }
/**
 * 
 * @param {Producto} prod 
 * @param {*} cant 
 */
    comprarProducto (prod, cant) {
    //    let desc = this.getDescuento();
    //    console.log("DescCompraProd: "+desc);
    //    console.log("Cliente: " + this.#nombreCliente + " está comprando: " + cant + " unidad/es de: "+prod.getNombreProducto() );
    //    this._montoComprado += ((prod.getPrecioProducto())*cant)*(1-desc); 
    }
       
    montoGastado () {
        console.log("Cliente: " + this.#nombreCliente+", lleva gastado: "+this._montoComprado);
    }
    
}

module.exports = NuestrosClientes;
