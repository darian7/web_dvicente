import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { ifError } from 'assert';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-crearusuarios',
  templateUrl: './crearusuarios.component.html',
  styleUrls: ['./crearusuarios.component.css']
})
export class CrearusuariosComponent implements OnInit {

  UserDatos: {
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String,
    experiencia: String,
    comentario: String,
    identificacion: String,
    genero: String,
    nacimiento: String
  } = {
      nombre: "",
      apellido: "",
      correo: "",
      contrasena: "",
      experiencia: "",
      comentario: "",
      identificacion: "",
      genero: "",
      nacimiento: ""
    };

  lleno = true;

  constructor(private CrearUsuariosService: AuthService) { }

  ngOnInit() {
  }

  CrearUsuarios() {

    if (this.UserDatos.apellido == "") {
      this.UserDatos.apellido = "Sin apellido";
    } if (this.UserDatos.nacimiento == "") {
      this.UserDatos.nacimiento = "1993-01-13";
    } if (this.UserDatos.comentario == "") {
      this.UserDatos.comentario = "Sin comentario";
    } if (this.UserDatos.experiencia == "") {
      this.UserDatos.experiencia = "0";
    } if (this.UserDatos.identificacion == "") {
      this.UserDatos.identificacion = "Sin identificacion";
    }

    this.CrearUsuariosService.CrearUsuarios(this.UserDatos)
    this.lleno=true;
  }

  Verificar() {
    if (this.UserDatos.nombre !== "" && this.UserDatos.correo !== "" && this.UserDatos.contrasena !== "" && this.UserDatos.genero !== null) {
      this.lleno = false;
    } else {
      this.lleno = true;
    }
  }

}
