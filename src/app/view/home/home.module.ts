import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeWorksapceComponent } from './home-worksapce.component';
import { LatestblocksComponent } from './latestblocks/latestblocks.component';
import { GraphListComponent } from './graph-list/graph-list.component';
import { BlockDetailListComponent } from './block-detail-list/block-detail-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { HttpClientModule, HttpClient, HttpParams } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TransServiceService } from '../../shared/services/trans-service.service';
import { ChartService} from '../../shared/services/chart.service';
import { CustomLoader } from 'src/app/app.module';


@NgModule({
  declarations: [
    HomeWorksapceComponent,
    LatestblocksComponent,
    GraphListComponent,
    BlockDetailListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TranslateModule.forChild({
      loader: {provide: TranslateLoader, useClass: CustomLoader, deps : [HttpClient]},         
  })
  ],
  providers: [TransServiceService,CookieService,ChartService],
})
export class HomeModule {}
