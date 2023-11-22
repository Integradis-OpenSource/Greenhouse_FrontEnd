import {Component, OnInit} from '@angular/core';
import {Employee} from "../../../profiles/model/employee";
import {UserService} from "../../../profiles/services/user.service";
import {Company} from "../../../profiles/model/company";
import {CompanyService} from "../../../profiles/services/company.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  showMenu = false;
  user: Employee;
  company: Company;

  constructor(private userService: UserService, private companyService: CompanyService, private router: Router) {
    this.user = new Employee;
    this.company = new Company;
  }

  getUserAndCompany() :void {
    this.companyService.setResourceEndpoint('');
    this.userService.setResourceEndpoint('');
    this.userService.getById(this.userService.getEmployeeId()).subscribe((response: any) => {
      this.user = response;
      this.companyService.getById(response.companyId).subscribe((response: any) => {
        this.company = response;
      });
    });
  }

  getCompany(): void {
    this.companyService.setResourceEndpoint('');
    this.companyService.getById(1).subscribe((response: any) => {
      this.company = response;
      console.log(response);
    });
  }

  isLoginPageOrSignupPage(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/signup';
  }

  toggleNavbar() {
    if (this.isLoginPageOrSignupPage()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }

  displayMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnInit(): void {
    this.getUserAndCompany();
    //this.getCompany();
  }
}
