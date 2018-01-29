import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";

/**
 * Generated class for the KursiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kursi',
  templateUrl: 'kursi.html',
})
export class KursiPage {
public kursis: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.kursis=data.kursis
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KursiPage');
  }

}
