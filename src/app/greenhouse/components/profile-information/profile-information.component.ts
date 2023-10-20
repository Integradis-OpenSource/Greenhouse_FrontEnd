import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})

export class ProfileInformationComponent implements OnInit{
  @Input() user: User = new User();
  constructor(private userService: UserService) {}

  ngOnInit(): void{
    this.getUser();
  }

  private getUser(id: string = '1'){
    this.userService.getById(this.user.id).subscribe((user: User) => {
      this.user = user;
      console.log(this.user)
    });
  }
}
