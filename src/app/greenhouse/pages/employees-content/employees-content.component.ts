import { Component } from '@angular/core';

@Component({
  selector: 'app-employees-content',
  templateUrl: './employees-content.component.html',
  styleUrls: ['./employees-content.component.css']
})
export class EmployeesContentComponent {
  employees: any[] = [
    {
      image: "https://www.svgrepo.com/show/452030/avatar-default.svg",
      name: "Winson Smith",
    },
    {
      image: "https://www.svgrepo.com/show/452030/avatar-default.svg",
      name: "Will Smith",
    },
    {
      image: "https://www.svgrepo.com/show/452030/avatar-default.svg",
      name: "John Smith",
    },
    {
      image: "https://www.svgrepo.com/show/452030/avatar-default.svg",
      name: "Jane Smith",
    },
    {
      image: "https://www.svgrepo.com/show/452030/avatar-default.svg",
      name: "Jenny Smith",
    }
  ]
}
