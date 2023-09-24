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
import {StepperContentComponent} from './harvestings/components/stepper-content/stepper-content.component';
import { ButtonPrimaryComponent } from './shared/components/button-primary/button-primary.component';
import {  RouterOutlet } from "@angular/router";
import { ToolbarContentComponent } from './shared/components/toolbar-content/toolbar-content.component';
import {  MatToolbarModule } from "@angular/material/toolbar";
import {  MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";


import { DashboardCardComponent } from './dashboard/components/dashboard-card/dashboard-card.component';
import { DashboardContentComponent } from './dashboard/components/dashboard-content/dashboard-content.component';
import {InformationComponent} from "./profiles/shared/components/information/information.component";
import {ProfileInformationComponent} from "./profiles/users/components/profile-information/profile-information.component";
import {ProfileContentComponent} from "./profiles/users/components/profile-content/profile-content.component";
import {AvatarComponent} from "./profiles/shared/components/avatar/avatar.component";
import {OrganizationContentComponent} from "./profiles/organizations/components/organization-content/organization-content.component";
import {OrganizationInformationComponent} from "./profiles/organizations/components/organization-information/organization-information.component";
import {EmployeesContentComponent} from "./profiles/employees/components/employees-content/employees-content.component";
import { ProcessTableComponent } from './harvestings/components/process-table/process-table.component';
import { ProcessLogComponent } from './harvestings/components/process-log/process-log.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ProcessInputDialogComponent } from './harvestings/components/process-input-dialog/process-input-dialog.component';
import {FormsModule} from "@angular/forms";
import { ProcessInputDialogTunnelComponent } from './harvestings/components/process-input-dialog-tunnel/process-input-dialog-tunnel.component';
import { ProcessInputDialogStockComponent } from './harvestings/components/process-input-dialog-stock/process-input-dialog-stock.component';
import { ProcessInputDialogPreparationAreaComponent } from './harvestings/components/process-input-dialog-preparation-area/process-input-dialog-preparation-area.component';
import { ProcessInputDialogBunkerComponent } from './harvestings/components/process-input-dialog-bunker/process-input-dialog-bunker.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarContentComponent,
    DashboardCardComponent,
    DashboardContentComponent,
    InformationComponent,
    ProfileInformationComponent,
    ProfileContentComponent,
    AvatarComponent,
    OrganizationContentComponent,
    OrganizationInformationComponent,
    EmployeesContentComponent,
    StepperContentComponent,
    ButtonPrimaryComponent,
    ProcessTableComponent,
    ProcessLogComponent,
    ProcessInputDialogComponent,
    ProcessInputDialogTunnelComponent,
    ProcessInputDialogStockComponent,
    ProcessInputDialogPreparationAreaComponent,
    ProcessInputDialogBunkerComponent,
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      LayoutModule,
      MatButtonModule,
      MatIconModule,
      MatCardModule,
      NgOptimizedImage,
      MatStepperModule,
      RouterOutlet,
      MatToolbarModule,
      MatTableModule,
      MatFormFieldModule,
      MatInputModule,
      MatDialogModule,
      FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
