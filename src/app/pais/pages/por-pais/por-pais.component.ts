import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li {
    cursor: pointer;
  }`
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
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
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(termino).subscribe(
      (res) => {
        this.paisesSugeridos = res.splice(0, 5)
      }, (err) => {
        this.paisesSugeridos = [];
        console.log(err);
      });
  }

}
