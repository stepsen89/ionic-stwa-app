import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StarWarsServiceProvider } from '../../providers/starwars-service/starwars-service';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-people',
  templateUrl: 'people.html',
})
export class PeoplePage {
  people: Observable<any>;

  constructor(    
    public navCtrl: NavController, 
    public navParams: NavParams,
    public starWarsService: StarWarsServiceProvider) {
      this.people = this.starWarsService.getPeople();
    }


  openDetails(character){
    this.navCtrl.push('CharacterPage', {character: character})
  }

}
