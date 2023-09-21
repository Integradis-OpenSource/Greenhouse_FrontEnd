import {Component, Input, Output} from '@angular/core';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent {
  field: string = '';
  value: string = '';
  type: string = '';
  Name : string = "Winston Smith";
  Email: string = "winstonsmith@peruagro.com";
  Organization: string = "Peru Agro J&V S.A.C";
  Role: string = "Administrador";
  Password: string = "sgtews"
}
