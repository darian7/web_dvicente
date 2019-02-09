import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlBase } from './activos/confi';
import { Observable } from 'rxjs';
import { faceCliente, facePedido } from './pedidos/pedido'

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(public http: HttpClient, public urlbase: urlBase) {
  }

  ValidarUsuario(user) {

    return fetch(this.urlbase.geturl() + "users/signin", {
      method: 'POST',
      body: 'correo=' + user.correo + '&&contrasena=' + user.contrasena,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  CrearUsuarios(userdatos) {

    fetch(this.urlbase.geturl() + "persons/create", {
      method: 'POST',
      body: 'nombre=' + userdatos.nombre + '&&apellido=' + userdatos.apellido + '&&genero=' + userdatos.genero + '&&fe_naci=' + userdatos.nacimiento + '&&identifi=' +
        userdatos.identificacion + '&&estado=1',
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    }).catch(function (error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
      return confirm('No Hay Conexion a Internet');
    });

    fetch(this.urlbase.geturl() + "users/create", {
      method: 'POST',
      body: 'nombre=' + userdatos.nombre + ' ' + userdatos.apellido + '&&contrasena=' + userdatos.contrasena + '&&correo=' + userdatos.correo + '&&comentario=' +
        userdatos.comentario + '&&experiencia=' + userdatos.experiencia + '&&estado=1&&fkPersona=1',
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  MostrarUsuarios() {
    return fetch(this.urlbase.geturl() + "empleados")
  }

  CrearProductos(producto) {
    return fetch(this.urlbase.geturl() + "products/create", {
      method: 'POST',
      body: 'nombre=' + producto.nombre + '&&referencia=' + producto.referencia + '&&iva=' + producto.iva +
        '&&existencia=' + producto.existencia +
        '&&comentario=' + producto.comentario + '&&fkMarca=285&&fkLote=2&&imagen=' + producto.imagen +
        '&&rotacion=2&&minimo=2&&maximo=2&&valor='
        + producto.precio + '&&descuento=' + producto.descuento + '&&detalle=' + producto.detalle,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  ListarProducto(idproducto) {

    return fetch(this.urlbase.geturl() + "productos/" + idproducto)

  }

  ListarProductos() {
    return fetch(this.urlbase.geturl() + "productos")
  }

  ListarProductosTotal(consulta: String) {
    return fetch(this.urlbase.geturl() + "products/queryProduct/" + consulta)
  }

  CrearFactura(factura) {
    return fetch(this.urlbase.geturl() + "factura/create", {
      method: 'POST',
      body: 'tipo=' + factura.tipo + '&&val_recibido=' + factura.val_recibido + '&&descuento=' + factura.descuento +
        '&&fk_usuario=' + factura.fk_usuario,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  CrearPedido(pedido) {
    return fetch(this.urlbase.geturl() + "pedido/create", {
      method: 'POST',
      body: 'fkFactura=' + pedido.fkFactura + '&&fkCliente=' + pedido.fkCliente,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  AñadirProductos(producto: { fkProducto: Number, fkPedido: Number, cantidad: String }) {
    console.log("dentro añadir productos")
    return fetch(this.urlbase.geturl() + "pedido/AddProductToPedido", {
      method: 'POST',
      body: 'fkProducto=' + producto.fkProducto + '&&fkPedido=' + producto.fkPedido + '&&cantidad=' + producto.cantidad,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  ElimarProductosPedido(producto: { fkProducto: Number, fkPedido: Number }) {
    return fetch(this.urlbase.geturl() + "pedido/RemoveProductoOfPedido", {
      method: 'PUT',
      body: 'fkProducto=' + producto.fkProducto + '&&fkPedido=' + producto.fkPedido,
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  CambiarEstae(idPedido) {
    return fetch(this.urlbase.geturl() + "pedido/ChangeStatePedido", {
      method: 'PUT',
      body: 'idPedido=' + idPedido + '&&state=COLA',
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
  }

  ConsultarPedido(idProducto) {
    return fetch(this.urlbase.geturl() + "pedido/getOne/" + idProducto);
  }

  ConsultarDetallePedido(idProducto) {
    return fetch(this.urlbase.geturl() + "pedido/getProductosPorPedido/" + idProducto);
  }

  ClienteIdentificacion(identificacion) {
    return fetch(this.urlbase.geturl() + "cliente/getByIdentifi/" + identificacion);
  }

  BuscarClientes() {
    return fetch(this.urlbase.geturl() + "cliente/All");
  }

  ClienteID2(id: Number): Observable<Array<faceCliente>> {
    return this.http.get<Array<faceCliente>>(this.urlbase.geturl() + "cliente/getOne/" + id);
  }

  CosnultarPedidoEstado2(estado): Observable<Array<facePedido>> {
    return this.http.get<Array<facePedido>>(this.urlbase.geturl() + "pedido/getPedidoEstadoX/" + estado);
  }

  CreateClient(cliente) {
    const httpPostOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    };
    return this.http.post(this.urlbase.geturl() + "cliente/create", cliente, httpPostOptions)
  }

  SelectUser(iduser) :any {
    return this.http.get(this.urlbase.geturl() + "empleados/" + iduser)
  }

  UpdateUser(user) {
    const httpPostOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    };
    return this.http.put(this.urlbase.geturl() + "users/update", user, httpPostOptions)
  }

  SelectClient(idclient) {
    return this.http.get(this.urlbase.geturl() + "cliente/getOne/" + idclient)
  }

  UpdateClient(client) {
    const httpPostOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
    };
    return this.http.put(this.urlbase.geturl() + "cliente/update", client, httpPostOptions)
  }

}

