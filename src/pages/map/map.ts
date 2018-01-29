import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

declare var google;
let markerkuning:any;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  lokasi = [
    ['Ancol', -6.125554, 106.8381656, 'A', 'Tempat Wisata di daerah utara Jakarta'],
    ['RSI Jakarta', -6.1715907, 106.8763922, 'B', 'Rumah Sakit'],
    ['TMII', -6.3024459, 106.8951559, 'C', 'Tempat Wisata di daerah timur Jakarta'],
    ['Ragunan', -6.2968282, 106.8037759, 'D', 'Tempat Wisata di daerah selatan Jakarta'],
    ['PIK', -6.1171193, 106.7441449, 'E', 'Tempat Wisata di daerah barat Jakarta'],
    ['Atria', -6.1906986, 106.739765, 'F', 'Tempat belanja furniture keluarga anda']
  ];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -6.1753924, lng: 106.8271528 },
      zoom: 10,
      gestureHandling: 'cooperative'
    });
    var pinColor = "e9f900";
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor);
    markerkuning = new google.maps.Marker({
      position: { lat: -6.1753924, lng: 106.8271528 },
      map: map,
      draggable: false,
      title: 'Fix Marker',
      label: 'X',
      icon: pinImage
    });
    map.addListener('center_changed', function(){
      markerkuning.setPosition(map.getCenter());
    });
    this.buatMarkers(map);
  }

  buatMarkers(map) {
    for (let i = 0; i < this.lokasi.length; i++) {
      let lokasi = this.lokasi[i];
      let marker = new google.maps.Marker({
        position: { lat: lokasi[1], lng: lokasi[2] },
        map: map,
        draggable: true,
        title: lokasi[0],
        label: lokasi[3]
      });
      for (let i = 0; i < this.lokasi.length; i++) {
        let lokasi = this.lokasi[i];
        let infowindow = new google.maps.InfoWindow({
          content: lokasi[4],
          maxWidth: 200
        });

        google.maps.event.addListener(marker, 'click', function () {
          infowindow.open(map, marker);
        });
      }
    }
  }

  ionViewDidLoad() {
    this.initMap()
  }

}
