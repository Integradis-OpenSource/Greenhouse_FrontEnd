import { Component, OnInit } from '@angular/core';
import { Company } from "../../model/company";
import { CompanyService } from "../../services/company.service";
import { UserService } from "../../services/user.service";
import { User } from "../../model/user";

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  company: Company;
  employees: User[] = [];

  constructor(private companyService: CompanyService, private userService: UserService) {
    this.company = {} as Company;
  }

  getCompany(): void {
    this.companyService.getList().subscribe((response: any) => {
      this.company = response[0];
      this.getEmployees();
    });
  }

  getEmployees(): void {
    this.userService.getEmployeesByCompany(this.company.id).subscribe((response: User[]) => {
      this.employees = response;
    });
  }

  ngOnInit(): void {
    this.getCompany();
  }
}
