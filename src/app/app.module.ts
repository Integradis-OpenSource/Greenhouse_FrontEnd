import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InformationComponent} from "./profiles/components/information/information.component";
import {ProfileInformationComponent} from "./profiles/components/profile-information/profile-information.component";
import { MainContentComponent } from './profiles/components/main-content/main-content.component';
import {AvatarComponent} from "./profiles/components/avatar/avatar.component";

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    ProfileInformationComponent,
    MainContentComponent,
    AvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
