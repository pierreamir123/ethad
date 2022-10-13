import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/HEADER.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarProfileComponent } from './sidebar/sidebar-profile/sidebar-profile.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { WelcomeWidgetComponent } from './dash-board/welcomeWidget/welcomeWidget.component';
import { StatusComponent } from './dash-board/statusWidget/status.component';
import { ChartsWidgetComponent } from './dash-board/charts-widget/charts-widget.component';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
import { TicketPriorityWidgetComponent } from './dash-board/ticket-priority-widget/ticket-priority-widget.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
import { BarChartComponent } from './dash-board/charts-widget/bar-chart/bar-chart.component';
import { RecentTicketsComponent } from './dash-board/recent-tickets/recent-tickets.component';
@NgModule({
  declarations: [
    AppComponent,

      HeaderComponent,
       SidebarComponent,
       SidebarProfileComponent,
       DashBoardComponent,
       WelcomeWidgetComponent,
       StatusComponent,
       ChartsWidgetComponent,
       CanvasJSChart,
       TicketPriorityWidgetComponent,
       BarChartComponent,
       RecentTicketsComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarProfileComponent,
    DashBoardComponent,
    WelcomeWidgetComponent,
    StatusComponent,
    ChartsWidgetComponent,
    CanvasJSChart,
    TicketPriorityWidgetComponent,
    BarChartComponent,]
})
export class AppModule { }
