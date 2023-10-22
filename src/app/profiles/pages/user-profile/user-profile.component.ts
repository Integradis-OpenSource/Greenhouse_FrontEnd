import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  constructor(private userService: UserService) {
    this.user = {} as User;
  }
  getUser() :void {
    this.userService.getList().subscribe((response: any) => {
      this.user = response[0];
    });
  }
  ngOnInit(): void {
    this.getUser();
  }
}
