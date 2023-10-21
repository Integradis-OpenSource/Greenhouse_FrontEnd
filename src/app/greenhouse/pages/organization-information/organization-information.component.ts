import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../model/company';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-organization-information',
  templateUrl: './organization-information.component.html',
  styleUrls: ['./organization-information.component.css']
})
export class OrganizationInformationComponent  implements OnInit{
  @Input() company : Company = new Company();

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompany();
  }
  getCompany(){
    this.companyService.setResourceEndpoint('company');
    this.companyService.getById('1').subscribe((company: Company) => {
      this.company = company;
      console.log(this.company)
    });
  }
}

