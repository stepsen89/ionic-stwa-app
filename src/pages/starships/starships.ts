import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StarWarsServiceProvider } from '../../providers/starwars-service/starwars-service';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {
  starships: Observable<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public starWarsService: StarWarsServiceProvider) {
      this.starships = this.starWarsService.getStarships();
    }


  openDetails(starship){
    this.navCtrl.push('StarshipPage', {starship: starship})
  }
}
