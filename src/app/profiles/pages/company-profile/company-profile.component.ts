import { Component, OnInit } from '@angular/core';
import { Company } from "../../model/company";
import { CompanyService } from "../../services/company.service";
import { UserService } from "../../services/user.service";
import { Employee } from "../../model/employee";
import {InviteEmployeeDialogComponent} from "../../components/invite-employee-dialog/invite-employee-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {
  company: Company;
  employees: Employee[] = [];

  constructor(private companyService: CompanyService, private userService: UserService, private dialog: MatDialog) {
    this.company = new Company;
  }
  getCompany(): void {
    this.companyService.setResourceEndpoint('');
    this.userService.setResourceEndpoint('company/');
    this.companyService.getById(1).subscribe((response: any) => {
      this.userService.getById(response.id).subscribe((response: any) => {
        this.employees = response;
      });
      this.company = response;
    });
  }

  /*
  getEmployees(): void {
    console.log(this.companyId);
    this.userService.setResourceEndpoint('company/');
    this.userService.getById(this.companyId).subscribe((response: any) => {
      this.employees = response;

    });
  }
  */

  openInviteEmployeeForm(): void {
    const dialogRef = this.dialog.open(InviteEmployeeDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit(): void {
    this.getCompany();
    //this.getEmployees();
  }
}
