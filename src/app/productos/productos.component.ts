import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private productosService: AuthService) { }

  productos: Array<{
    id_producto: String,
    nombre_producto: string,
    precio_kilo: String,
    cantidad: String,
    estado_producto: string
  }> = [];

  productosTotal: Array<{
    idProducto: Number,
    nombre: String,
    valor: Number,
    descuento: Number,
    referencia: String,
    iva: Number,
    existencia: Number,
    comentario: String,
    imagen: String
  }> = [];

  porNombre = {
    valor1: ""
  };

  Mostrar = true;
  Mostrar2 = false;

  producto: any;

  pedidoactivo = false;


  factura: { tipo: String, val_recibido: Number, descuento: Number, fk_usuario: Number } = {
    tipo: "CONTADO",
    val_recibido: 0,
    descuento: 0,
    fk_usuario: 0
  }

  pedido: { fkFactura: Number, fkCliente: Number } = { fkFactura: null, fkCliente: null }

  HayCliente = false;

  //Array de productos que se estan agregando al pedido actual

  ProductosPedido: Array<any> = [];

  //Id el pedido que se encuentra en marcha

  idPedido: Number = null;

  NombreCliente: String = null;

  ArregloExistencia: Array<Number> = [];

  //nuevo: string = undefined;

  Cantidad = 0;

  Tipocliente : string = '';

  ngOnInit() {
    var local = localStorage.getItem('id_usuario')
    if (local != null) {
      this.factura.fk_usuario = parseInt(local);
    }
    if (this.porNombre.valor1 == "") {
      this.Mostrar = true;
      this.Mostrar2 = false;
      this.MostrarProductosCache();
    } else {
      this.Mostrar = false;
      this.Mostrar2 = true
      this.MostrarTotalProductosConcidencia();
    }

    if (localStorage.getItem('login')) {
      this.Pedidos.fk_comanda_comandante = JSON.parse(localStorage.getItem('login')); 
      this.Tipocliente  = JSON.parse(localStorage.getItem('tipo_usuario'))
    }
    
  }

  SelectCantidad(num) {
    console.log(this.Cantidad)
    console.log(num)
  }


  MostrarTotalProductosConcidencia() {
    this.productosService.ListarProductosTotal(this.porNombre.valor1).then(response => response.json())
      .then(json => this.productosTotal = json[0])
  }

  MostrarProductosCache() {
    this.productosService.ListarProductos().then(response => response.json())
      .then(json => this.productos = json).catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
        return confirm('No Hay Conexion a Internet');
      });
  }

  Pedido(idproducto) {
    this.productosService.ListarProducto(idproducto).subscribe(json => {

      console.log(json)
        this.ArregloExistencia = [];
        /*for (let index = 1; index <= json.cantidad; index++) {
          this.ArregloExistencia.push(index);
        }*/
        this.producto = json

      })
  }

  ExisteCliente(fkcliente) {
    console.log(fkcliente);
    if (fkcliente != "") {
      this.productosService.ClienteIdentificacion(fkcliente).then(response => response.json()).
        then(json => {
          if (json.length >= 1) {
            //console.log(json);   
            this.NombreCliente = json[0].nombre;
            this.pedido.fkCliente = json[0].idCliente;
            console.log(this.pedido.fkCliente + "este es el id del cliente encontrado")
            this.HayCliente = true;
          } else {
            this.HayCliente = false;
          }
        })
    };
  }

  CerrarPedido(activado) {
    if (activado) {
      this.pedidoactivo = true;
      console.log("se abrio el pedido")
      this.crearPedido();
    } else {
      this.pedidoactivo = false;
      console.log("se cerro el pedido")
      this.id_pedido = null;
      this.ProductosPedido = [];
    }
  }

  crearFactura() {
    this.productosService.CrearFactura(this.factura).then(response => response.json()).
      then(json => {
        //console.log(json)
        this.pedido.fkFactura = json[0].idFactura;
        //this.crearPedido();
      })
  }

  Pedidos: {
    id_pedido: number,
    fk_comanda_comandante: number,
    fk_comanda_id: number,
    fk_comanda_batallon: number
    dia: number,
    mes: number,
    año: number,
    total_pedido: number,
    estado_pedido: string
  } = {
      id_pedido: 0,
      fk_comanda_comandante: null,
      fk_comanda_id: 1,
      fk_comanda_batallon: 1,
      dia: 7,
      mes: 3,
      año: 2019,
      total_pedido: 0,
      estado_pedido: 'cola'
    }

  contenido: {
    id_contenido: number,
    fk_producto: number,
    fk_pedido: number,
    cantidad_kilos: number,
    precio_cantidad: number,
    estado_contenido: string
  } = {
      id_contenido: null,
      fk_producto: null,
      fk_pedido: null,
      cantidad_kilos: null,
      precio_cantidad: null,
      estado_contenido: 'c'
    }

  crearPedido() {
    this.productosService.CrearPedido(this.Pedidos).subscribe(json => {
      console.log(json['count(id_pedido)']) 
      this.id_pedido = json['count(id_pedido)'];
    });
  }

  id_pedido = null;

  Validarpedido() {
    console.log(this.id_pedido)
    this.contenido.fk_pedido = this.id_pedido;
    this.contenido.fk_producto = this.producto.id_producto;
    this.contenido.cantidad_kilos = this.Cantidad;

    console.log(this.contenido)

    this.productosService.AñadirProductos(this.contenido).subscribe(json => {
      console.log(json);
      this.ProductosPedido.push({
        nombre_producto : json.data.nombre_producto,
        cantidad : this.contenido.cantidad_kilos,
      })
    });
  }

  EliminarProductoPedido(index) {
    console.log("se elminara el producto")
    // puede aver errores
    this.productosService.ElimarProductosPedido({ fk_pedido: this.id_pedido , fk_producto: this.ProductosPedido[index].id_producto}).
      subscribe(json => {
        console.log(json);
        this.ProductosPedido.splice(index, 1);
      });
    //
  }

}
