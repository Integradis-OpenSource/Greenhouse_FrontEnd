import {Component, OnInit} from '@angular/core';
import {User} from "../../../profiles/model/user";
import {UserService} from "../../../profiles/services/user.service";
import {Company} from "../../../profiles/model/company";
import {CompanyService} from "../../../profiles/services/company.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  showMenu = false;
  user: User;
  company: Company;

  toggleNavbar() {
    this.showMenu = !this.showMenu;
  }

  constructor(private userService: UserService, private companyService: CompanyService) {
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

  ngOnInit(): void {
    this.getUser();
    this.getCompany();
  }
}
