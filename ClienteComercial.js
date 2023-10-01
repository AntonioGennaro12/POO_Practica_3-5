const NuestrosClientes = require("./NuestrosClientes.js");
const Producto  = require("./Producto.js");

//
class ClienteComercial extends NuestrosClientes {
    #descuento;
    constructor(nombre, monto, desc) {
        super(nombre, monto);
        this.#descuento = desc;    
    }
    
    setDescuento (desc) {
        this.#descuento = desc;
    }

    getDescuento() {
        return (this.#descuento);
    }

// Procedimientos 
    comprarProducto(prod, cant){
        let desc = this.getDescuento();
        console.log("DescCompraProd: "+desc);
        console.log("Cliente: " + this.getNombreCliente() + " está comprando: " + cant + " unidad/es de: "+prod.getNombreProducto() );
        this._montoComprado += ((prod.getPrecioProducto())*cant)*(1-desc); 

    }

}

module.exports = ClienteComercial;


