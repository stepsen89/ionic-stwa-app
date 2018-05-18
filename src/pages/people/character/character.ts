import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
@IonicPage()
@Component({
  selector: 'page-character',
  templateUrl: 'character.html',
})
export class CharacterPage {
  character: any;
 
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
    this.character = this.navParams.get('character');
  }
}