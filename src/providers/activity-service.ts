import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Activity} from '../model/Activity';
import {ACTIVITY} from '../model/activity-mock';


/*
  Generated class for the ActivityService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActivityService {

  constructor(public http: Http) {}

  getActivities(): Promise<Activity[]>{
    return Promise.resolve(ACTIVITY);
  }



}
