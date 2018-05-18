import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Pages
import { TabsPage } from '../pages/tabs/tabs';
import { FilmsPage } from '../pages/films/films';
import { FilmPage } from '../pages/films/film/film';
import { PeoplePage } from '../pages/people/people';
import { StarshipsPage } from '../pages/starships/starships';
import { CharacterPage } from '../pages/people/character/character';

//Providers
import { StarWarsServiceProvider } from '../providers/starwars-service/starwars-service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FilmsPage,
    PeoplePage,
    StarshipsPage,
    FilmPage,
    CharacterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FilmsPage,
    PeoplePage,
    StarshipsPage,
    FilmPage,
    CharacterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StarWarsServiceProvider
  ]
})
export class AppModule {}
