import { Pipe, PipeTransform } from '@angular/core';
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { nextTick } from 'q';

@Pipe({
  name: 'clienteFiltro'
})
export class ClientePipe implements PipeTransform {

  transform(value: Array<{
    idCliente: Number,
    nombre: String,
    apellido: String,
    identificacion: String,
    fe_naci: String,
    edad: Number,
    fidelidad: Number,
    estado: Number,
    fkTipoCliente: Number
  }>, buscador: String): Array<{
    idCliente: Number,
    nombre: String,
    apellido: String,
    identificacion: String,
    fe_naci: String,
    edad: Number,
    fidelidad: Number,
    estado: Number,
    fkTipoCliente: Number
  }> {
    

    return value.filter(prod => {

      if (!(prod.nombre.toUpperCase().indexOf(buscador.toUpperCase()) > -1).valueOf()) { 
        return prod.identificacion.toUpperCase().indexOf(buscador.toUpperCase()) > -1;
      };
       return prod.nombre.toUpperCase().indexOf(buscador.toUpperCase()) > -1;

    })


  }

}
