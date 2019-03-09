import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  constructor(
    private ruta: ActivatedRoute,
    private servicio: AuthService
  ) {
    this.ruta.params.subscribe(params => {

      console.log(params['id'] + " esta es la ruta")

    });
  }


  ngOnInit() {

  }



}
