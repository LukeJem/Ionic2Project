import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Activity} from '../../model/Activity';
import {ActivityService} from '../../providers/activity-service';

/*
  Generated class for the MyActivityList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-activity-list',
  templateUrl: 'my-activity-list.html'
})
export class MyActivityListPage {
  selectedActivity: any;
  activities: Activity[];

  constructor(public navCtrl: NavController, private activityService: ActivityService) {}

  getActivities(){
     this.activityService.getActivities().then(activities => this.activities = activities);
  }

  ionViewWillEnter() {
    this.getActivities();
  }

}
