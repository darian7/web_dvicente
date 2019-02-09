import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-productosenpedido',
  templateUrl: './productosenpedido.component.html',
  styleUrls: ['./productosenpedido.component.css']
})
export class ProductosenpedidoComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private servicio : AuthService ) {

    this.ruta.params.subscribe(params => {

      console.log(params['id'] + " esta es la ruta")
      this.servicio.ConsultarPedido(params['id']).then(response => response.json())
      .then(json => {
        console.log(json)
        this.pedido= json[0];
        console.log("esta aca")
        console.log(this.pedido)
        this.servicio.ConsultarDetallePedido(this.pedido.idPedido).then(response => response.json())
        .then(json => {
          this.ProductosPedido = json[0];
        });

      });

    })

   }

   pedido : {  
   idPedido: Number,
   referencia : String,
   fecha : String,
   estado: String,
   fkFactura: Number,
   fkCliente: Number
   }={
    
   idPedido: null,
   referencia : "",
   fecha : "",
   estado: "",
   fkFactura: null,
   fkCliente: null
   }

   ProductosPedido : Array< { 
   nombre : String,
   referencia: Number,
   iva: Number,
   existencia : Number,
   fecha_pedido: String,
   cantidad: Number,
   refer_pedidio: Number,
   estado :String 
  } > = [];

  ngOnInit() {
  }

}
