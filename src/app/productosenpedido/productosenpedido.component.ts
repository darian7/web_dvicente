import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-productosenpedido',
  templateUrl: './productosenpedido.component.html',
  styleUrls: ['./productosenpedido.component.css']
})
export class ProductosenpedidoComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private servicio: AuthService) {

    this.ruta.params.subscribe(params => {

      console.log(params['id'] + " esta es la ruta")

      this.id = params['id'];

      this.pedido =[];

      this.ProductosPedido = [];


      this.servicio.ConsultarDetallePedido(params['id']).subscribe(json => {
      
        this.pedido = json;

        for (let index = 0; index < json.length; index++) {
          this.servicio.ListarProducto(json[index].fk_producto).subscribe(json => this.ProductosPedido.push(json))
        }

        this.Loading = true;

      });

    })

  }


  id;

  Loading = false;

  pedido:Array<any> = [];

  ProductosPedido: Array<any> = [];

  ngOnInit() {
  }

}
