import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit
{
  pokeName: string;
  abilities: JSON[];
  constructor(private _HttpService: HttpService) {}
  ngOnInit()
  {
    this.getPokemonFromService();
    //this.getPokemonFromAbilities();
  }
  getPokemonFromService()
  {
    let pokemon= this._HttpService.getPokemon();
    pokemon.subscribe(data => {
      this.abilities = data.abilities;
      console.log(this.abilities);
      for(let i=0; i<this.abilities.length; i++)
    {
      let temp= this._HttpService.getOtherPokemon(this.abilities[i].ability.url);
      temp.subscribe(data => {
        console.log(data);
      });
    }
    });
  }
  getPokemonFromAbilities()
  {
    for(let i=0; i<this.abilities.length; i++)
    {
      let temp= this._HttpService.getOtherPokemon(abilities[i].ability.url);
      temp.subscribe(data => {
        console.log(data);
      });
    }
  }

}
