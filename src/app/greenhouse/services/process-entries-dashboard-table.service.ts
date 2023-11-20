import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {ProcessEntryDashboardTable} from "../model/process-entry-dashboard-table";
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../shared/services/auth.service";
import {TokenStorageService} from "../../shared/services/tokenStorage.service";

@Injectable({
  providedIn: 'root'
})
export class ProcessEntriesDashboardTableService extends BaseService<ProcessEntryDashboardTable>{
  constructor(http: HttpClient, tokenStorageService: TokenStorageService) {
    super(http, tokenStorageService)
    //this.basePath = "https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI2"
    //this.basePath = "https://greenhouse.zeabur.app/api/v1/crops"
    this.basePath = 'http://localhost:8080/api/v1/crops';
  }
  setResourceEndpoint(endpoint: string) {
    this.resourceEndpoint = `/${endpoint}`;
  }

  getMostRecentRecord(type: String, cropId: number) {
    this.setResourceEndpoint(`${type}&&crop_id=${cropId}&&_sort=date&_order=desc&_limit=1`);
    return this.getAll();
  }
}
