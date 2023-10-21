import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/shared/services/base.service';
import { Company } from '../model/company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseService<Company> {

  constructor(htpp: HttpClient) {
    super(htpp);
  }

  setResourceEndpoint(endpoint: string) {
    this.resourceEndpoint = `/${endpoint}`;
  }
}
