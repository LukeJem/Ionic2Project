import { NgModule, ErrorHandler } from '@angular/core';
import {TranslateService} from 'ng2-translate';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { MyActivityListPage } from '../pages/my-activity-list/my-activity-list';
import {DetailActivityPage} from '../pages/detail-activity/detail-activity';

import { ActivityService } from '../providers/activity-service';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MyActivityListPage,
    DetailActivityPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    MyActivityListPage,
    DetailActivityPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ActivityService, TranslateService]
})
export class AppModule {}
