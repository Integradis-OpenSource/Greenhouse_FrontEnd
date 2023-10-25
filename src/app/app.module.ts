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
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";


import { DashboardCardComponent } from './greenhouse/components/dashboard-card/dashboard-card.component';
import { DashboardComponent } from './greenhouse/pages/dashboard/dashboard.component';
import {InformationComponent} from "./greenhouse/components/information/information.component";
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
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { LoginComponent } from './public/pages/login/login.component';
import { SignupComponent } from './public/pages/signup/signup.component';
import {MatCheckboxModule} from "@angular/material/checkbox";

import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import { LanguageSelectionComponent } from './public/components/language-selection/language-selection.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSelectModule} from "@angular/material/select";
import { UserProfileComponent } from './profiles/pages/user-profile/user-profile.component';
import { CompanyProfileComponent } from './profiles/pages/company-profile/company-profile.component';
import {DashboardTableComponent} from "./greenhouse/components/dashboard-table/dashboard-table.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardCardComponent,
    DashboardComponent,
    InformationComponent,
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
    LanguageSelectionComponent,
    UserProfileComponent,
    CompanyProfileComponent,
    DashboardTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en', loader: {
        provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [HttpClient]
      }
    }),
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
    MatButtonToggleModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
