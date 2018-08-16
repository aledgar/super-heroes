import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: []
})
export class BusquedaComponent implements OnInit {

  arrHeroes: any[] = [];
  error = false;
  texto: string;
  constructor(private _activeRoute: ActivatedRoute, _serviceHeroes: HeroesService) {
    this._activeRoute.params.subscribe(params => {
        console.log(params);
        this.arrHeroes = _serviceHeroes.buscarHeroes(params.nombre);
        if (this.arrHeroes.length === 0) {
          console.log('Error');
          this.texto = params.nombre;
          this.error = true;
        } else {
          this.error = false;
        }
        console.log(this.arrHeroes);
    });

  }

  ngOnInit() {
  }

}
