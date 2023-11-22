import {Component, OnInit} from '@angular/core';
import {User} from "../../../profiles/model/user";
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
  user: User;
  company: Company;

  constructor(private userService: UserService, private companyService: CompanyService, private router: Router) {
    this.user = {} as User;
    this.company = {} as Company;
  }

  getUser(): void {
    this.userService.getList().subscribe((response: any) => {
      this.user = response[0];
    });
  }

  getCompany(): void {
    this.companyService.getList().subscribe((response: any) => {
      this.company = response[0];
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

  ngOnInit(): void {
    this.getUser();
    this.getCompany();
  }
}
