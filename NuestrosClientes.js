const ClienteComercial = require("./ClienteComercial.js");
const Producto  = require("./Producto.js");
const { Promociones, 
    DESC_POR_MONTO, DESC_POR_CANTIDAD, REINTEGRO_FIJO, DESC_POR_FECHA, 
    MONTO_COMPRA, MONTO_COMPRADO, FECHA_CUMPLE, 
    CLIENTES_TODOS, CLIENTES_RESID, CLIENTES_COMERC,
    UNICA_VEZ, VIG_PERPETUA } = require("./Promociones.js");

//const Producto  = require("./Producto.js");
//
class NuestrosClientes {
    #nombreCliente;    // nombre completo 
    _montoComprado;    //acumulado por cliente 
    #promosQueTiene;      // null (no tiene) o sino lista de promoiciones

     
    constructor(nombre, comprado, promos) {
        this.#nombreCliente = nombre;
        this._montoComprado = comprado;   // variable protegida con trtamiento especial
        this.#promosQueTiene = promos;
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

    setPromociones(promos) {
        this.#promosQueTiene (promos);
    }

    getPromociones(){
        return (this.#promosQueTiene);
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

    listadoDePromociones () {
        if (this.#promosQueTiene == null) {
            console.log("Cliente: " + this.#nombreCliente+", No tiene Promociones!!!");
        }
        else {
            let promosTotales = this.#promosQueTiene.length;
            let promosquetengo = 0;
            for (let i=0; i<promosTotales;i++ ) {
                if ((this.#promosQueTiene[i].getDirigidaA() == CLIENTES_TODOS)|| (this.#promosQueTiene[i].getDirigidaA() == CLIENTES_RESID)) {
                    //console.log("Promo Nro: "+(i+1)+" = "+this.#promosQueTiene[i].getNombrePromo());
                    promosquetengo++;
                }
            }
            console.log("Cliente: " + this.#nombreCliente+", Tiene "+promosquetengo+" Promociones!!!");
        }        
    }
}

module.exports = NuestrosClientes;
