import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarCapital(this.termino)
    .subscribe( (resp) => {
      console.log(resp);
      this.paises = resp;
    }, (err) => {
      this.hayError = true;
      console.log(err);
      this.paises = [];
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    // TODO crear sugerencias
  }

}
