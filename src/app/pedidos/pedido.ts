export interface facePedido {

    idPedido: Number,
    referencia: String,
    fecha: String,
    estado: String,
    fkFactura: Number,
    fkCliente: Number
}

export interface faceCliente {
    idCliente: Number,
    nombre: String,
    apellido: String,
    identificacion: String,
    fe_naci: String,
    edad: Number,
    fidelidad: Number,
    estado: Number,
    fkTipoCliente: Number

}