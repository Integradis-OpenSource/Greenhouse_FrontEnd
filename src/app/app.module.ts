import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {InformationComponent} from "./profiles/shared/components/information/information.component";
import {ProfileInformationComponent} from "./profiles/users/components/profile-information/profile-information.component";
import {ProfileContentComponent} from "./profiles/users/components/profile-content/profile-content.component";
import {AvatarComponent} from "./profiles/shared/components/avatar/avatar.component";
import {OrganizationContentComponent} from "./profiles/organizations/components/organization-content/organization-content.component";
import {OrganizationInformationComponent} from "./profiles/organizations/components/organization-information/organization-information.component";
import {EmployeesContentComponent} from "./profiles/employees/components/employees-content/employees-content.component";


@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    ProfileInformationComponent,
    ProfileContentComponent,
    AvatarComponent,
    OrganizationContentComponent,
    OrganizationInformationComponent,
    EmployeesContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgOptimizedImage,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
