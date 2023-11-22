import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {Employee} from "../../model/employee";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: Employee;
  constructor(private userService: UserService) {
    this.user = new Employee();
  }
  getUser() :void {
    this.userService.setResourceEndpoint('');
    this.userService.getById(this.userService.getEmployeeId()).subscribe((response: any) => {
      this.user = response;
      console.log(response);
    });
  }
  ngOnInit(): void {
    this.getUser();
  }
}
