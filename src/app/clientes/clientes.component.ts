import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {

  constructor( private Servicio : AuthService) { }

  clientes : Array<any> = [];

  buscador: String="";

  ngOnInit() {
    this.ConsultarClientes();
  }


  ConsultarClientes () {
    this.Servicio.BuscarClientes().subscribe(json => {
      console.log(json)
      this.clientes = json;
    });
  }

}
