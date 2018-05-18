import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StarWarsServiceProvider } from '../../providers/starwars-service/starwars-service';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  films: Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public starWarsService: StarWarsServiceProvider) {
      this.films = this.starWarsService.getFilms();
      console.log(this.films);
    }


  openDetails(film){
    this.navCtrl.push('FilmPage', {film: film})
  }
}
