import { Component, Input, OnInit } from '@angular/core';
import { Business } from '../../model/business';
import { BusinessService } from '../../services/business.service';

@Component({
  selector: 'app-organization-information',
  templateUrl: './organization-information.component.html',
  styleUrls: ['./organization-information.component.css']
})
export class OrganizationInformationComponent  implements OnInit{
  @Input() business : Business = new Business();

  constructor(private businessService: BusinessService) { }

  ngOnInit(): void {
    this.getBussines();
  }
  getBussines(){
    this.businessService.setResourceEndpoint('business');
    this.businessService.getById('1').subscribe((business: Business) => {
      this.business = business;
      console.log(this.business)
    });
  }
}

