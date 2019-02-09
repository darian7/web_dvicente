import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service'
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private servicio: AuthService) {
    this.ruta.params.subscribe(params => {

      this.servicio.SelectUser(params['id']).subscribe(response => {
        console.log(response)
        this.UserDatos = response;
      });

    });
  }

  UserDatos : {   
    cedula_empleado: String,
    primer_nombre : String,
    segundo_nombre: String,
    primer_apellid0 : String,
    segundo_apellido: String,
    cargo: String,
    salario: String
  } = {
    cedula_empleado: null,
    primer_nombre : null,
    segundo_nombre: null,
    primer_apellid0 : null,
    segundo_apellido: null,
    cargo: null,
    salario: null
  }

  ngOnInit() {
  }

  UpdateUser(){
    this.servicio.UpdateUser(this.UserDatos).subscribe(response => {
      console.log(response);
      this.servicio.SelectUser(this.UserDatos.cedula_empleado).subscribe(response => {
        this.UserDatos = response[0];
      });
      
    })
  }

}
