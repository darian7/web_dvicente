import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Observable, Subscriber, of, throwError } from 'rxjs';
import { faceCliente, facePedido } from './pedido'
import { map, switchMap, concatMap, flatMap, tap, retry, subscribeOn, timeout, catchError, mergeMap } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private Servicio: AuthService) {

  }

  PedidosCola: Array<facePedido> = [];

  PedidosAtendido: Array<facePedido> = [];

  i = 0;
  i2 = 0;

  ngOnInit() {
    this.ConsultarPedidosAtendido2();
    this.ConsultarPedidoCola2();
  }

  ConsultarPedidosAtendido2() {

    this.Servicio.CosnultarPedidoEstado2("Atendido").pipe(

      tap(pedidos => {
        this.PedidosAtendido = pedidos
      }),
      flatMap(x => x),
      mergeMap(pedido => this.Servicio.ClienteID2(pedido.fkCliente).pipe(
        map((cliente) => {
          return {
            ...pedido,
            nombre: cliente[0].nombre
          }
        })
      )),
      retry(4),
      catchError(error => {
        return throwError("Error al consultar pedios en cola : " + error);
      })

    ).subscribe(pedidosnew => {

      this.PedidosAtendido = this.PedidosAtendido.map((curren) => {

        if (curren.idPedido !== pedidosnew.idPedido) {
          return curren;
        } else {
          return pedidosnew;
        }
      });

    });


  }

  ConsultarPedidoCola2() {

    this.Servicio.CosnultarPedidoEstado2("COLA").pipe(

      tap(pedidos => {
        this.PedidosCola = pedidos
        // console.log(this.PedidosCola)
      }),
      flatMap(x => x),
      mergeMap(pedido => this.Servicio.ClienteID2(pedido.fkCliente).pipe(
        map((cliente) => {
          return {
            ...pedido,
            nombre: cliente[0].nombre
          }
        })
      )),
      retry(4),
      catchError(error => {
        return throwError("Error al consultar pedios en cola : " + error);
      })

    ).subscribe(pedidosnew => {

      this.PedidosCola = this.PedidosCola.map((curren) => {

        if (curren.idPedido !== pedidosnew.idPedido) {
          return curren;
        } else {
          return pedidosnew;
        }
      });

    });

  }

}






