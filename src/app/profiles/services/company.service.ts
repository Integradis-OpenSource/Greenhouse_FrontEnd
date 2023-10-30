import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Company } from '../model/company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseService<Company> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = "https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI1"
    this.resourceEndpoint = "/companies";
  }
}
