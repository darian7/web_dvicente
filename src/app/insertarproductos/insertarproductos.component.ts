import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-insertarproductos',
  templateUrl: './insertarproductos.component.html',
  styleUrls: ['./insertarproductos.component.css']
})
export class InsertarproductosComponent implements OnInit {

  producto: {
    nombre_producto: string,
    precio_kilo: string,
    cantidad: string,
    estado_producto: string
  } = {
      nombre_producto :'',
      precio_kilo: '',
      cantidad: '',
      estado_producto:''
    }

  lleno = true;

  constructor(private CrearproductoService: AuthService) { }

  ngOnInit() {
  }

  CrearProductos() {
    this.CrearproductoService.CrearProductos(this.producto).then(response => response.json())
      .then(json => console.log(json))
      .catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
        return confirm('No Hay Conexion a Internet');
      });
  }

  Validar() {
    console.log("validando " + this.producto)
    if (this.producto.nombre_producto !== "" && this.producto.precio_kilo !== "" && this.producto.cantidad !== "") {
      this.lleno = false;
    } else {
      this.lleno = true;
    }
  }

}
