import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KursiPage } from './kursi';

@NgModule({
  declarations: [
    KursiPage,
  ],
  imports: [
    IonicPageModule.forChild(KursiPage),
  ],
})
export class KursiPageModule {}
