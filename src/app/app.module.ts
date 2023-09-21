import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatStepperModule} from "@angular/material/stepper";
import {RouterOutlet} from "@angular/router";
import { ToolbarContentComponent } from './shared/components/toolbar-content/toolbar-content.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { DashboardCardComponent } from './dashboard/components/dashboard-card/dashboard-card.component';
import { DashboardContentComponent } from './dashboard/components/dashboard-content/dashboard-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    DashboardCardComponent,
    DashboardContentComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        LayoutModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        NgOptimizedImage,
        MatStepperModule,
        RouterOutlet,
        MatToolbarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
