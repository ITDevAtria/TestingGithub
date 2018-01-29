import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from "../../providers/data/data";

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
public tabs: any[]
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.tabs=data.tabs
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

}
