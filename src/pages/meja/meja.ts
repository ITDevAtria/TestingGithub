import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";

/**
 * Generated class for the MejaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meja',
  templateUrl: 'meja.html',
})
export class MejaPage {
public mejas: any[]
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.mejas=data.mejas
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MejaPage');
  }

}
