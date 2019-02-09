import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-mostrarusuarios',
  templateUrl: './mostrarusuarios.component.html',
  styleUrls: ['./mostrarusuarios.component.css']
})
export class MostrarusuariosComponent implements OnInit {

  constructor(
    private UsuariosService: AuthService, 
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {

      this.matIconRegistry.addSvgIcon(
        "unicorn",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/outline-thumb_up_alt-24px.svg")
      );

  }

  usuarios: Array<{
    cedula_empleado: String,
    primer_nombre: String,
    segundo_nombre: String,
    primer_apellido: String,
    segundo_apellido: String,
    cargo: String,
    salario: String
  }> = [];
  buscador = "";


  ngOnInit() {
    this.MostrarUsuarios();
  }

  MostrarUsuarios() {

    this.UsuariosService.MostrarUsuarios().then(response => response.json())
      .then(json => this.usuarios = json).catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
        return confirm('No Hay Conexion a Internet');
      });

  }

}
