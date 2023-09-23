import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardContentComponent} from "./dashboard/components/dashboard-content/dashboard-content.component";
import {StepperContentComponent} from "./harvestings/components/stepper-content/stepper-content.component";
import {ProfileContentComponent} from "./profiles/users/components/profile-content/profile-content.component";
import { OrganizationContentComponent } from "./profiles/organizations/components/organization-content/organization-content.component";
import {ProcessLogComponent} from "./harvestings/components/process-log/process-log.component";
import {PopupWarningComponent} from "./harvestings/components/popup-warning/popup-warning.component";
import {PopupNewCropComponent} from "./harvestings/components/popup-new-crop/popup-new-crop.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardContentComponent },
  { path: 'process-log', component: ProcessLogComponent },
  { path: 'harvest', component: StepperContentComponent },
  { path: 'profile', component: ProfileContentComponent },
  { path: 'organization', component: OrganizationContentComponent },
  {path:'popup',component:PopupWarningComponent},
  {path:'popup-new-crop', component:PopupNewCropComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
