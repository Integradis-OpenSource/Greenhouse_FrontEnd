import { Component } from '@angular/core';

@Component({
  selector: 'app-organization-information',
  templateUrl: './organization-information.component.html',
  styleUrls: ['./organization-information.component.css']
})
export class OrganizationInformationComponent {
  field: string = '';
  value: string = '';
  type: string = '';
  BusinessName : string = "Peru Agro J&V S.A.C";
  RUC: string = "20600995741";

}
