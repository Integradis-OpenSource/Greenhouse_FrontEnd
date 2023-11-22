import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/pages/dashboard/dashboard.component";
import {StepperContentComponent} from "./crops/pages/stepper-content/stepper-content.component";
import {CropsInProgressComponent} from "./crops/pages/crops-in-progress/crops-in-progress.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {LoginComponent} from "./public/pages/login/login.component";
import {SignupComponent} from "./public/pages/signup/signup.component";
import {UserProfileComponent} from "./profiles/pages/user-profile/user-profile.component";
import {CompanyProfileComponent} from "./profiles/pages/company-profile/company-profile.component";
import {StatisticalReportsComponent} from "./analytics/pages/statistical-reports/statistical-reports.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'statistical-reports', component: StatisticalReportsComponent },
  { path: 'crops-in-progress', component: CropsInProgressComponent },
  { path: 'harvest/:id/:phase', component: StepperContentComponent },
  { path: 'profile', component: UserProfileComponent },
  { path: 'company', component: CompanyProfileComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
