export class Company {
  id: number;
  company_name: string;
  ruc: string;
  image: string;
  owner_id: number;
  users: any[];

  constructor() {
    this.id = 0;
    this.company_name = '';
    this.ruc = '';
    this.image = '';
    this.owner_id = 0;
    this.users = [];
  }
}
