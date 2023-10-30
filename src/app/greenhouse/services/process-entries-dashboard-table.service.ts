import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {ProcessEntryDashboardTable} from "../model/process-entry-dashboard-table";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProcessEntriesDashboardTableService extends BaseService<ProcessEntryDashboardTable>{
  constructor(http: HttpClient) {
    super(http)
    this.basePath = "https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI2"
  }
  setResourceEndpoint(endpoint: string) {
    this.resourceEndpoint = `/${endpoint}`;
  }

  getMostRecentRecord(type: String, cropId: number) {
    this.setResourceEndpoint(`${type}&&crop_id=${cropId}&&_sort=date&_order=desc&_limit=1`);
    return this.getAll();
  }
}
