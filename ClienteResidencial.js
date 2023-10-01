const NuestrosClientes = require("./NuestrosClientes.js");
const Producto  = require("./Producto.js");
//
class ClienteResidencial extends NuestrosClientes {
    #fechaCumpleanios;
    constructor(nombre, monto, fechaCumple) {
        super(nombre, monto);
        this.#fechaCumpleanios = fechaCumple;    // string cuatro caracteres
    }
    
    setFechaCumpleanios (fechaC) {
        this.#fechaCumpleanios = fechaC;
    }

    getFechaCumpleanios() {
        return (this.#fechaCumpleanios);
    }

    comprarProducto(prod, cant){
        /* let desc = this.getDescuento(); */
        /* console.log("DescCompraProd: "+desc); */
        console.log("Cliente: " + this.getNombreCliente() + " está comprando: " + cant + " unidad/es de: "+prod.getNombreProducto() );
        this._montoComprado += ((prod.getPrecioProducto())*cant); /* sin esto: *(1-desc) */
    }

    montoGastado(){
        console.log("Cliente: " + this.getNombreCliente()+", Cumpleaños: "+ this.getFechaCumpleanios() + ", lleva gastado: "+this._montoComprado);
    }
}

module.exports = ClienteResidencial;


