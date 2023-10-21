export class User {
  id: string;
  name: string;
  email: string;
  organization: string;
  role: string;
  password: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.email = '';
    this.organization = '';
    this.role = '';
    this.password = '';
  }
}
