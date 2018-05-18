import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-film',
  templateUrl: 'film.html',
})
export class FilmPage {
  film: any;
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    this.film = this.navParams.get('film');
  }
}