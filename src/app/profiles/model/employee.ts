export class Employee {
  id: number;
  image: string;
  companyId: number;
  fullName: string;
  email: string;

  constructor() {
    this.id = 0;
    this.companyId = 0;
    this.fullName = '';
    this.email = '';
    this.image = 'https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png';
  }
}
