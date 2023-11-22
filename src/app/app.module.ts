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
import {StepperContentComponent} from './crops/pages/stepper-content/stepper-content.component';
import { ButtonPrimaryComponent } from './public/components/button-primary/button-primary.component';
import {  RouterOutlet } from "@angular/router";
import { ToolbarComponent } from './public/components/toolbar/toolbar.component';
import {  MatToolbarModule } from "@angular/material/toolbar";
import {  MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";


import { DashboardCardComponent } from './dashboard/components/dashboard-card/dashboard-card.component';
import { DashboardComponent } from './dashboard/pages/dashboard/dashboard.component';
import { ProcessTableComponent } from './crops/components/process-table/process-table.component';
import { CropsInProgressComponent } from './crops/pages/crops-in-progress/crops-in-progress.component';
import { PopupWarningComponent } from './crops/components/popup-warning/popup-warning.component';
import { PopupNewCropComponent } from './crops/components/popup-new-crop/popup-new-crop.component';
import { PopupCropFinishedComponent } from './crops/components/popup-crop-finished/popup-crop-finished.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
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
import {DashboardTableComponent} from "./dashboard/components/dashboard-table/dashboard-table.component";
import { StatisticalReportsComponent } from './analytics/pages/statistical-reports/statistical-reports.component';
import { LineChartComponent } from './analytics/components/line-chart/line-chart.component';
import { AgChartsAngularModule } from 'ag-charts-angular';
import { InviteEmployeeDialogComponent } from './profiles/components/invite-employee-dialog/invite-employee-dialog.component';
import {authInterceptorProviders} from "./shared/services/auth-interceptor.service";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardCardComponent,
    DashboardComponent,
    StepperContentComponent,
    ButtonPrimaryComponent,
    ProcessTableComponent,
    CropsInProgressComponent,
    PopupWarningComponent,
    PopupNewCropComponent,
    PopupCropFinishedComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    LanguageSelectionComponent,
    UserProfileComponent,
    CompanyProfileComponent,
    DashboardTableComponent,
    StatisticalReportsComponent,
    LineChartComponent,
    InviteEmployeeDialogComponent,
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
    MatSortModule,
    AgChartsAngularModule,
    ReactiveFormsModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
