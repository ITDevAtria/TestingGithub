import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams } from 'ionic-angular';

import { DataProvider } from "../../providers/data/data";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public menus: any[];
  constructor(public navCtrl: NavController, public data: DataProvider, public navParams: NavParams) {
    this.menus = data.menus
  }

  openPage(item) {
    this.navCtrl.push(item.page)
  }
}
