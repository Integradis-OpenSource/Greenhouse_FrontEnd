export class User {
  id: number;
  company_id: number;
  image: string;
  first_name: string;
  last_name: string;
  email: string;

  constructor() {
    this.id = 0;
    this.company_id = 0;
    this.image = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
  }
}
