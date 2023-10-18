import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  organization_name = 'placeholder_organization_name';
  user_name = 'placeholder_user_name';
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
