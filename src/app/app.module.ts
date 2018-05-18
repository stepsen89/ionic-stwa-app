import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

//Pages
import { TabsPage } from '../pages/tabs/tabs';
import { FilmsPage } from '../pages/films/films';
import { PeoplePage } from '../pages/people/people';
import { StarshipsPage } from '../pages/starships/starships';

//Providers
import { StarWarsServiceProvider } from '../providers/starwars-service/starwars-service';
import { HttpModule } from '@angular/http';
import { CharacterPageModule } from '../pages/people/character/character.module';
import { PeoplePageModule } from '../pages/people/people.module';
import { StarshipsPageModule } from '../pages/starships/starships.module';
import { FilmsPageModule } from '../pages/films/films.module';
import { FilmPageModule } from '../pages/films/film/film.module';
import { SignupPage } from '../pages/signup/signup';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CharacterPageModule,
    PeoplePageModule,
    StarshipsPageModule,
    FilmsPageModule,
    FilmPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FilmsPage,
    PeoplePage,
    StarshipsPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StarWarsServiceProvider
  ]
})
export class AppModule {}
