import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-insertarproductos',
  templateUrl: './insertarproductos.component.html',
  styleUrls: ['./insertarproductos.component.css']
})
export class InsertarproductosComponent implements OnInit {

  producto: {
    nombre: String,
    referencia: String,
    comentario: String,
    precio: String,
    existencia: String,
    iva: String,
    descuento: String,
    detalle: String,
    imagen: String
  } = {
      nombre: "",
      referencia: "",
      comentario: "",
      precio: "",
      existencia: "",
      iva: "",
      descuento: "",
      detalle: "",
      imagen: "",
    }

  lleno = true;

  constructor(private CrearproductoService: AuthService) { }

  ngOnInit() {
  }

  CrearProductos() {
    if (this.producto.imagen == "") {
      this.producto.imagen = "http://www.cristaldelponiente.com/administrador/vistas/img/productos/default/anonymous.png";
    } if (this.producto.comentario == "") {
      this.producto.comentario = "Sin comentario";
    } if (this.producto.descuento == "") {
      this.producto.descuento = "0";
    } if (this.producto.detalle == "") {
      this.producto.detalle = "Sin detalle";
    } if (this.producto.existencia == "") {
      this.producto.existencia = "0";
    } if (this.producto.iva == "") {
      this.producto.iva = "0";
    }

    this.CrearproductoService.CrearProductos(this.producto).then(response => response.json())
      .then(json => console.log(json))
      .catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
        return confirm('No Hay Conexion a Internet');
      });

  }

  Validar() {
    console.log("validando " + this.producto.precio)
    if (this.producto.nombre !== "" && this.producto.precio !== "" && this.producto.referencia !== "") {
      this.lleno = false;
    } else {
      this.lleno = true;
    }
  }

}
