import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../../shared/services/tokenStorage.service";
import {UserService} from "../../../profiles/services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  constructor(private tokenStorageService: TokenStorageService, private userService :UserService) {}

  ngOnInit(): void {
    this.userService.setResourceEndpoint('');
    this.userService.getById(this.userService.getEmployeeId()).subscribe((response: any) => {
      this.tokenStorageService.saveCompanyId(response.companyId);
    });
  }
}
