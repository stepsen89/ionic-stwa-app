import { Component } from "@angular/core";

import { StarshipsPage } from "../starships/starships";
import { FilmsPage } from "../films/films";
import { PeoplePage } from "../people/people";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class TabsPage {
  filmsPage = FilmsPage;
  starshipsPage = StarshipsPage;
  peoplePage = PeoplePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}