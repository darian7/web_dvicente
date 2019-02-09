import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  CerrarSesion(){
    localStorage.removeItem('id_usuario')
    localStorage.removeItem('logeado')
  }

}
