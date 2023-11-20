import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Company } from '../model/company';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../../shared/services/auth.service";
import {TokenStorageService} from "../../shared/services/tokenStorage.service";

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends BaseService<Company> {

  constructor(http: HttpClient, tokenStorageService: TokenStorageService) {
    super(http, tokenStorageService);
    this.basePath = "https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI1"
    this.resourceEndpoint = "/companies";
  }
}
