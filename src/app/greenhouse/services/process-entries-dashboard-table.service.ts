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
  }
  setResourceEndpoint(endpoint: string) {
    this.resourceEndpoint = `/${endpoint}`;
  }
}
