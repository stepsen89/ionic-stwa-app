import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class StarWarsServiceProvider {

  constructor(public http: HttpClient, private httph:Http) {}

  //return films
  getFilms() {
    return this.httph.get('https://swapi.co/api/films/?format=json').map(res => res.json());
  }

  //return people
  getPeople() {
    return this.http.get('https://swapi.co/api/people/?format=json').map((res) => res.json());
  }

  //return starships
  getStarships() {
    return this.http.get('https://swapi.co/api/starship');
  }
}
