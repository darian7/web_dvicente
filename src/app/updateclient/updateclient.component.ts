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
        this.ClientDatos = response;
        //this.ClientDatos.fe_naci = response[0].fe_naci.split("T")[0];
      });

    });

  }

  ClientDatos: any = {}

  ngOnInit() {
  }

  UpdateClient(){
   
    this.servicio.UpdateClient(this.ClientDatos).subscribe(response => {

      console.log(response);
      this.ClientDatos = response.data
     
      /*this.servicio.SelectClient(this.ClientDatos.idCliente).subscribe(response => {

        console.log(response);
        //this.ClientDatos = response;
        //this.ClientDatos.fe_naci = response[0].fe_naci.split("T")[0];
      });*/
      
    })
  }

}
