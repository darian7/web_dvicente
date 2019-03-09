import { Pipe, PipeTransform } from '@angular/core';
import { NEXT } from '@angular/core/src/render3/interfaces/view';
import { nextTick } from 'q';

@Pipe({
  name: 'clienteFiltro'
})
export class ClientePipe implements PipeTransform {

  transform(value: Array<any>, buscador:string) {
    
    return value.filter(prod => {

     
       return prod.primer_nombre_comandante.toUpperCase().indexOf(buscador.toUpperCase()) > -1;

    })


  }

}
