import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-updateclient',
  templateUrl: './updateclient.component.html',
  styleUrls: ['./updateclient.component.css']
})
export class UpdateclientComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private servicio: AuthService) {

    this.ruta.params.subscribe(params => {

      this.servicio.SelectClient(params['id']).subscribe(response => {
        this.ClientDatos=response[0];
        this.ClientDatos.fe_naci = response[0].fe_naci.split("T")[0];
       
      });

    });

  }

  ClientDatos: {

    idCliente: Number,
    nombre: String,
    apellido: String,
    identificacion: String,
    fe_naci: String,
    edad: Number,
    fidelidad: Number,
    estado: Number,
    fkTipoCliente: Number

  } = {

      idCliente: null,
      nombre: null,
      apellido: null,
      identificacion: null,
      fe_naci: null,
      edad: null,
      fidelidad: null,
      estado: null,
      fkTipoCliente: null

    }

  ngOnInit() {
  }

  UpdateClient(){
    this.servicio.UpdateClient(this.ClientDatos).subscribe(response => {
      this.servicio.SelectClient(this.ClientDatos.idCliente).subscribe(response => {
        this.ClientDatos = response[0];
        this.ClientDatos.fe_naci = response[0].fe_naci.split("T")[0];
      });
      
    })
  }

}
