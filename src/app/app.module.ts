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
import {StepperContentComponent} from './greenhouse/components/stepper-content/stepper-content.component';
import { ButtonPrimaryComponent } from './greenhouse/components/button-primary/button-primary.component';
import {  RouterOutlet } from "@angular/router";
import { ToolbarComponent } from './public/components/toolbar/toolbar.component';
import {  MatToolbarModule } from "@angular/material/toolbar";
import {  MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";


import { DashboardCardComponent } from './greenhouse/components/dashboard-card/dashboard-card.component';
import { DashboardComponent } from './greenhouse/pages/dashboard/dashboard.component';
import {InformationComponent} from "./greenhouse/components/information/information.component";
import {AvatarComponent} from "./greenhouse/components/avatar/avatar.component";
import {OrganizationContentComponent} from "./greenhouse/pages/organization-content/organization-content.component";
import {OrganizationInformationComponent} from "./greenhouse/pages/organization-information/organization-information.component";
import {EmployeesContentComponent} from "./greenhouse/pages/employees-content/employees-content.component";
import { ProcessTableComponent } from './greenhouse/components/process-table/process-table.component';
import { HarvestingInProgressComponent } from './greenhouse/pages/harvesting-in-progress/harvesting-in-progress.component';
import { PopupWarningComponent } from './greenhouse/components/popup-warning/popup-warning.component';
import { PopupNewCropComponent } from './greenhouse/components/popup-new-crop/popup-new-crop.component';
import { PopupCropFinishedComponent } from './greenhouse/components/popup-crop-finished/popup-crop-finished.component';
import { ProcessInputDialogComponent } from './harvestings/components/process-input-dialog/process-input-dialog.component';
import {FormsModule} from "@angular/forms";
import { ProcessInputDialogTunnelComponent } from './harvestings/components/process-input-dialog-tunnel/process-input-dialog-tunnel.component';
import { ProcessInputDialogStockComponent } from './harvestings/components/process-input-dialog-stock/process-input-dialog-stock.component';
import { ProcessInputDialogPreparationAreaComponent } from './harvestings/components/process-input-dialog-preparation-area/process-input-dialog-preparation-area.component';
import { ProcessInputDialogBunkerComponent } from './harvestings/components/process-input-dialog-bunker/process-input-dialog-bunker.component';
import { ProfileInformationComponent } from "./greenhouse/components/profile-information/profile-information.component";
import {ProfileContentComponent} from "./greenhouse/pages/profile-content/profile-content.component";
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { LoginComponent } from './public/pages/login/login.component';
import { SignupComponent } from './public/pages/signup/signup.component';
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardCardComponent,
    DashboardComponent,
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
    HarvestingInProgressComponent,
    PopupWarningComponent,
    PopupNewCropComponent,
    PopupCropFinishedComponent,
    ProcessInputDialogComponent,
    ProcessInputDialogTunnelComponent,
    ProcessInputDialogStockComponent,
    ProcessInputDialogPreparationAreaComponent,
    ProcessInputDialogBunkerComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
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
        MatCheckboxModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
