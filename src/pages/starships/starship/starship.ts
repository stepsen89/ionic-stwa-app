import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-starship',
  templateUrl: 'starship.html',
})
export class StarshipPage {
  starship: any;
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    this.starship = this.navParams.get('starship');
  }
}