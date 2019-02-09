import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-crearcliente',
  templateUrl: './crearcliente.component.html',
  styleUrls: ['./crearcliente.component.css']
})
export class CrearclienteComponent implements OnInit {

  constructor(private servicio: AuthService) { }

  ClientDatos: {
    nombre: String,
    apellido: String,
    identificacion: String,
    fe_naci: String,
    fkTipoCliente: String
  } = {
      nombre: "",
      apellido: "",
      identificacion: "",
      fe_naci: "",
      fkTipoCliente: ""
    }
  lleno=true;

  ngOnInit() {
  }

  Verificar() {
    
    if (this.ClientDatos.nombre !== "" && this.ClientDatos.identificacion !== "" ) {
      this.lleno = false;
    } else {
      this.lleno = true;
    }
  }

  CreateClient() {
    
    if (this.ClientDatos.apellido == "") {
      this.ClientDatos.apellido = "Sin apellido";
    } if (this.ClientDatos.fe_naci == "") {
      this.ClientDatos.fe_naci = "1993-01-13";
    } if (this.ClientDatos.fkTipoCliente == "") {
      this.ClientDatos.fkTipoCliente = "1";
    }

    this.servicio.CreateClient(this.ClientDatos).subscribe(response => {
      console.log(response)
    })

    this.lleno=true;
  }

}
