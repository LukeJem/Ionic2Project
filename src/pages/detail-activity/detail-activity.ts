import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the DetailActivity page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail-activity',
  templateUrl: 'detail-activity.html'
})
export class DetailActivityPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello DetailActivityPage Page');
  }

}
