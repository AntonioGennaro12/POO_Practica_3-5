const NuestrosClientes = require("./NuestrosClientes.js");
const Producto  = require("./Producto.js");
const { Promociones, CLIENTES_RESID } = require("./Promociones.js");

//
class ClienteResidencial extends NuestrosClientes {
    #fechaCumpleanios;
    constructor(nombre, monto, promos, fechaCumple,) {
        super(nombre, monto, promos);
        this.#fechaCumpleanios = fechaCumple;    // string cuatro caracteres
    }
    
    setFechaCumpleanios (fechaC) {
        this.#fechaCumpleanios = fechaC;
    }

    getFechaCumpleanios() {
        return (this.#fechaCumpleanios);
    }

    comprarProducto(prod, cant){
        console.log("Cliente: " + this.getNombreCliente() + " está comprando: " + cant + " unidad/es de: "+prod.getNombreProducto() );
        let descPromos = 0;
        let promos = this.getPromociones();
        if (promos != null){
            for (let i=0;i<promos.length;i++) {
                //console.log(promos[i].getNombrePromo());
                descPromos += promos[i].calculaDescPromo(this, CLIENTES_RESID, prod.getPrecioProducto(), cant, this.getFechaCumpleanios());
            }
        }
        this._montoComprado += (((prod.getPrecioProducto())*cant) - descPromos); 
    }

    montoGastado(){
        console.log("Cliente: " + this.getNombreCliente()+", Cumpleaños: "+ this.getFechaCumpleanios() + ", lleva gastado: "+this._montoComprado);
    }
}

module.exports = ClienteResidencial;


