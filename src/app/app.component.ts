import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// set TabsPage as Homepage
import { StarshipsPage } from '../pages/starships/starships';
import { FilmsPage } from '../pages/films/films';
import { PeoplePage } from '../pages/people/people';
import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage = TabsPage
  starshipsPage = StarshipsPage;
  filmsPage = FilmsPage;
  peoplePage = PeoplePage;
  @ViewChild('nav') nav: NavController;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

