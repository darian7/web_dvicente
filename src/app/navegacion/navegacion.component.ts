import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  tipo_cliente: string = '';

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('logeado')) {

      this.tipo_cliente = JSON.parse(localStorage.getItem('tipo_usuario'));
      console.log(this.tipo_cliente)
      
    }
  }

  CerrarSesion(){
    localStorage.removeItem('id_usuario')
    localStorage.removeItem('logeado')
  }

}
