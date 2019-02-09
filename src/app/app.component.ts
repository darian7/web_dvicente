import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  Nocultar: boolean = true;
  usuario: boolean = false;
  registerUserData = {}
  data: Number



  constructor(private Auth: AuthService) {

  }

  //@Output() dataUser = new EventEmitter

  ngOnInit() {

    if (localStorage.getItem('id_usuario')) {

      this.Nocultar = !JSON.parse(localStorage.getItem('id_usuario'));
      this.usuario = JSON.parse(localStorage.getItem('id_usuario'));

    } else {
      this.Nocultar = true;
      this.usuario = false;

    }
  }

  loginUser() {
    this.Auth.ValidarUsuario(this.registerUserData).then(response => response.json())
      .then(json => {

        if (json[0].data != -1) {
          this.data = json[0].data;

          localStorage.setItem('id_usuario', JSON.stringify(this.data))
          localStorage.setItem('logeado', JSON.stringify(true))

          this.Nocultar = !JSON.parse(localStorage.getItem('id_usuario'));
          this.usuario = JSON.parse(localStorage.getItem('id_usuario'));


        }

      }).catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
        return confirm('No Hay Conexion a Internet');
      });
  }
}
