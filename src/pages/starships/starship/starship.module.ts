import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarshipPage } from './starship';

@NgModule({
  declarations: [
    StarshipPage,
  ],
  imports: [
    IonicPageModule.forChild(StarshipPage),
  ],
})
export class StarshipPageModule {}
