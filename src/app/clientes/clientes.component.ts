import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})
export class ClientesComponent implements OnInit {

  constructor( private Servicio : AuthService) { }

  clientes : Array<{

    idCliente : Number,
    nombre : String,
    apellido : String,
    identificacion : String,
    fe_naci : String,
    edad : Number,
    fidelidad : Number,
    estado : Number,
    fkTipoCliente : Number

  }> = [];

  buscador: String="";

  ngOnInit() {
    this.ConsultarClientes();
  }


  ConsultarClientes () {
    this.Servicio.BuscarClientes().then(response => response.json()).
    then(json => {
      this.clientes = json;
    }).catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
      return confirm('No Hay Conexion a Internet');
    });
  }

}
