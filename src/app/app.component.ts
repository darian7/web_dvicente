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
  registerUserData : any = {}
  data: Number



  constructor(private Auth: AuthService) {

  }

  //@Output() dataUser = new EventEmitter

  ngOnInit() {
    
    if (localStorage.getItem('logeado')) {

      this.Nocultar = !JSON.parse(localStorage.getItem('logeado'));
      this.usuario = JSON.parse(localStorage.getItem('logeado'));

    } else {
      this.Nocultar = true;
      this.usuario = false;
    }

  }

  loginUser() {
    this.Auth.ValidarUsuario(this.registerUserData).subscribe(json => {

      console.log(json);

        if (json.Status == 'Login exitoso') {

          localStorage.setItem('login', JSON.stringify(json.data.pk))
          localStorage.setItem('logeado', JSON.stringify(true))
          localStorage.setItem('tipo_usuario', JSON.stringify(json.data.tipo_usuario))

          this.Nocultar = false;
          this.usuario = true;
          //this.Nocultar = !JSON.parse(localStorage.getItem('id_usuario'));
          //this.usuario = JSON.parse(localStorage.getItem('id_usuario'));

        }

      })
  }
}
