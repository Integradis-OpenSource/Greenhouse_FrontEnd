import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./greenhouse/pages/dashboard/dashboard.component";
import {StepperContentComponent} from "./greenhouse/components/stepper-content/stepper-content.component";
import {ProfileContentComponent} from "./profiles/users/components/profile-content/profile-content.component";
import { OrganizationContentComponent } from "./greenhouse/pages/organization-content/organization-content.component";
import {HarvestingInProgressComponent} from "./greenhouse/pages/harvesting-in-progress/harvesting-in-progress.component";
import {PopupWarningComponent} from "./greenhouse/components/popup-warning/popup-warning.component";
import {PopupNewCropComponent} from "./greenhouse/components/popup-new-crop/popup-new-crop.component";
import {PopupCropFinishedComponent} from "./greenhouse/components/popup-crop-finished/popup-crop-finished.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'harvesting-in-progress', component: HarvestingInProgressComponent },
  { path: 'harvest', component: StepperContentComponent },
  { path: 'profile', component: ProfileContentComponent },
  { path: 'organization', component: OrganizationContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
