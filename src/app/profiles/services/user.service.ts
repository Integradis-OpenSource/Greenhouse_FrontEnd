import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Employee } from '../model/employee';
import { HttpClient } from '@angular/common/http';
import {AuthService} from "../../shared/services/auth.service";
import {TokenStorageService} from "../../shared/services/tokenStorage.service";
import {ProcessEntryDashboardTable} from "../../dashboard/model/process-entry-dashboard-table";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<Employee> {
  constructor(http: HttpClient, tokenStorageService: TokenStorageService) {
    super(http, tokenStorageService);
    //this.basePath = "https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI1"
    this.basePath = "https://greenhouse.zeabur.app/api/v1/employees/";
    //this.resourceEndpoint = "/employees";
  }

  setResourceEndpoint(endpoint: string) {
    this.resourceEndpoint = `${endpoint}`;
  }
}
