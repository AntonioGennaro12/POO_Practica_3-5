const NuestrosClientes = require("./NuestrosClientes");


// TIPO
const DESC_POR_MONTO    = 0;
const DESC_POR_CANTIDAD = 1;
const REINTEGRO_FIJO    = 2;
const DESC_POR_FECHA    = 3;
let tiposPromo          = ["DESC_POR_MONTO", "DESC_POR_CANTIDAD", "REINTEGRO_FIJO", "DESC_POR_FECHA"];
// DISPARADOR
const MONTO_COMPRA      = 0;
const FECHA_CUMPLE      = 1;
let dispPromo           = ["MONTO_COMPRA", "FECHA_CUMPLE"];
// DIRIGIDO A:
const CLIENTES_TODOS    = 0;
const CLIENTES_RESID    = 1;
const CLIENTES_COMERC   = 2;
let dirigidoPromo       = ["CLIENTES_TODOS", "CLIENTES_RESID", "CLIENTES_COMERC"];
// VIGENCIA 
const UNICA_VEZ         = 0;
const VIG_PERPETUA      = 1;
let vigenciaPromo       = ["UNICA_VEZ", "VIG_PERPETUA"];


class Promociones {
    #nombrePromo;        
    #tipoPromo;         // descuento, reintegro, premio 
    #disparadorPromo;   // monto de la compra, fecha cumpleaños, etc
    #datoDisparoPromo;  // umbral de disparo Monto o fecha ("ddmm")
    #descuentoPremio;   // % de descuento o premio (si es fijo)
    #datoAdicFecha      // Dato adicional o fecha 
    #dirigidaA;         // Todos, Cientes comerciales, clientes Residenciales
    #vigenciaPromo;     // Unica vez, perpetua
    #descAcumulado;     // descuento acumulado
    #aplicadoA;         // Lista de clientes a quien de aplicó el descuento
    
        
    constructor (nombre, tipo, disparo, dato1, dato2, premio, dirigida, vigencia) {
        this.#nombrePromo = nombre;        
        this.#tipoPromo = tipo;             // valor numérico o texto
        this.#disparadorPromo = disparo;    // texto
        this.#datoDisparoPromo = dato1;      // Monto a partir del cual Aplica
        this.#datoAdicFecha = dato2;        // por ejemplo para promo por fecha
        this.#descuentoPremio = premio;     // % o número
        this.#dirigidaA = dirigida;         // Texto (Todos, comerciales, residenciales)
        this.#vigenciaPromo = vigencia;     // valor numérico o texto 
        this.#descAcumulado = 0;            // Acumulación de descuentos aplicados = 0
        this.#aplicadoA = [];               // Lista de clientes a quién se aplicó vacía
        this.#aplicadoA.length = 0;
    }
    
    setNombrePromo (nombr) {
        this.#nombrePromo = nombr;  
    }

    getNombrePromo() {
        return (this.#nombrePromo);
    }

    setTipoPromo (tipo) {
        this.#tipoPromo = tipo;   
    }

    getTipoPromo() {
        return (this.#tipoPromo);
    }

    setDisparadorPromo (disp) {
        this.#disparadorPromo = disp ;   
    }

    getDisparadorPromo () {
        return (this.#disparadorPromo);   // devuelve disparador
    }

    setMontoDePromo (dato) {
        this.#datoDisparoPromo = dato ;   // carga nuevo dato
    }

    getMontoDePromo () {
        return (this.#datoDisparoPromo);   // devuelve dato
    }
   
    setDescPremio (descprem) {
        this.#descuentoPremio = descprem ;     // vigencia
    }
    
    getDescPremio() {
        return (this.#descuentoPremio);     // devuelve vigencia
    }
    setDirigidaA (dirigida) {
        this.#dirigidaA = dirigida ;     // vigencia
    }
    
    getDirigidaA() {
        return (this.#dirigidaA);     // devuelve vigencia
    }

    setVigenciaPromo(vige) {
        this.#vigenciaPromo = cant ;     // vigencia
    }
    
    getVigenciaPromo() {
        return (this.#vigenciaPromo);     // devuelve vigencia
    }

    setVigenciaPromo(valor) {
        this.#descAcumulado = valor ;     // carga nuevo valor
    }
    
    getVigenciaPromo() {
        return (this.#descAcumulado);     // devuelve acumulado
    }

    getMontoDescAcumulado() {
        return (this.#descAcumulado);
    }

    setAplicadoA (nombreCliente) {
        this.#aplicadoA.push(nombreCliente);

    }
    
/// Procedimientos
    cualEstuNombreyDescricion () {
        console.log("Promoción: "+this.#nombrePromo+", Tipo: "+tiposPromo[this.#tipoPromo]+
                ", Disparador: "+dispPromo[this.#disparadorPromo]+", DatoDisparo: "+this.#datoDisparoPromo+
                ", Dato/Fecha: "+this.#datoAdicFecha+", Desc/Premio: "+this.#descuentoPremio+
                ", Dirig. a: "+dirigidoPromo[this.#dirigidaA]+", Vigencia: "+vigenciaPromo[this.#vigenciaPromo]+", Desc. Acum.: "+this.#descAcumulado);
    }
    
    /**
    * Verifica si un cliente ya recibió la promo
    * @param {String} nombreCliente 
    * @returns true or false
    */
    verificaAplicadoA (nombreCliente) {
        for (let i=0;i<this.#aplicadoA.length;i++ ) {
            if (this.#aplicadoA[i]== nombreCliente) {
                return (true);
            }
        }
        return (false);
    }

    /**
     * Devuelve día y mes
     * @returns String "ddmm"
     */
    getFechaDia() {
        const fecha = new Date();
        const dia = fecha.getDate(); // (1 a 31)
        const mes = fecha.getMonth() + 1; // (1 a 12)
        const diaFormateado = dia < 10 ? `0${dia}` : dia.toString(); // 2 dígitos
        const mesFormateado = mes < 10 ? `0${mes}` : mes.toString(); // 2 dígitos
        // Combino día y mes en formato "ddmm"
        let ddmm = diaFormateado + mesFormateado;
        return (ddmm);
    }
    /**  
     * 
     * @param {Object} cliente 
     * @param {Number} clienteTipo 
     * @param {Number} dato1 
     * @param {Number} dato2 (opcional) 
     * @param {Number} dato3 (opcional) 
     * @returns Number (descuento)
     */
    calculaDescPromo(cliente, clienteTipo, dato1, dato2, dato3) {
        let descuento = 0; 
        if (this.#vigenciaPromo == UNICA_VEZ) { // Verifica si promo es por Unica Vez y ya fue Aplicada a este Cliente
            if (this.verificaAplicadoA(cliente.getNombreCliente())=== true) {
                console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+
                ", Tipo: "+clienteTipo+", Desc. Aplicado: NO, YA FUE APLICADO UNA VEZ!!!"); 
                return (descuento);  
            }
        }         
        let resultado = false;
        switch(this.#tipoPromo) {
            case DESC_POR_MONTO: // dato 1 = precio , dato 2 = cant
                if ((dato1  * dato2) >= this.#datoDisparoPromo) {
                    if ((clienteTipo == this.#dirigidaA)||(this.#dirigidaA == CLIENTES_TODOS)) {
                        descuento = dato1 * dato2 * this.#descuentoPremio;
                        resultado = true;                    
                    }
                }
                break;
            case DESC_POR_CANTIDAD:  // dato 1 = precio , dato 2 = cant
                if (dato2 >= this.#datoDisparoPromo) { 
                    if ((clienteTipo == this.#dirigidaA)||(this.#dirigidaA == CLIENTES_TODOS)) {
                        descuento = dato1 * dato2 * this.#descuentoPremio;
                        resultado = true;                    
                    }
                }
                break;
            case REINTEGRO_FIJO:
                if ((dato1 * dato2) >= this.#datoDisparoPromo) {
                    if ((clienteTipo == this.#dirigidaA)||(this.#dirigidaA == CLIENTES_TODOS)) {
                        descuento = this.#descuentoPremio;
                        resultado = true;                    
                    }
                }
                break;  
            case DESC_POR_FECHA:
                if (this.#disparadorPromo == FECHA_CUMPLE) {
                    if (dato3 == this.getFechaDia()) { // compara fecha
                        if (clienteTipo == this.#dirigidaA) {
                            descuento = dato1 * dato2 * this.#descuentoPremio;
                            console.log("DescCumple: "+descuento);
                            resultado = true;                    
                        }
                    }
                }
                else if (this.#disparadorPromo == MONTO_COMPRA) {
                    if (this.#datoAdicFecha == this.getFechaDia()) { // compara fecha
                        if ((dato1*dato2) >= this.#datoDisparoPromo) {
                            descuento = dato1 * dato2 * this.#descuentoPremio;
                            resultado = true; 
                        }                    
                    }
                }                
                break;
            default:
                resultado = false;               
        }
        if (resultado === true) {
            if (this.#vigenciaPromo == UNICA_VEZ) { // Verifica si promo es por Unica Vez y guarda nombre del cliente
                this.setAplicadoA (cliente.getNombreCliente());
            }
            // imprime operación
            console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+", Tipo: "+clienteTipo+
                ", Monto: "+dato1+" x "+dato2+", Desc. Aplicado: $"+descuento); 
            this.#descAcumulado += descuento;
        } 
        else {
            console.log("Aplica Promo: "+this.getNombrePromo()+", a Cliente: "+cliente.getNombreCliente()+", Tipo: "+clienteTipo+
            ", Monto: "+dato1+" x "+dato2+", Desc. Aplicado: NO SE APLICÓ"); 
        } 
        return (descuento);        
    } // fin calcula desc promo  
}

module.exports = { Promociones, 
                    DESC_POR_MONTO, DESC_POR_CANTIDAD, REINTEGRO_FIJO, DESC_POR_FECHA, 
                    MONTO_COMPRA, FECHA_CUMPLE, 
                    CLIENTES_TODOS, CLIENTES_RESID, CLIENTES_COMERC,
                    UNICA_VEZ, VIG_PERPETUA };


