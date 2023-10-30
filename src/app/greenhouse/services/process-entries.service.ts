import {Injectable} from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {ProcessEntry} from "../model/process-entry";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProcessEntriesService extends BaseService<ProcessEntry> {
  constructor(http: HttpClient) {
    super(http)
    this.basePath = "https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI2"
  }
  setResourceEndpoint(endpoint: string) {
    this.resourceEndpoint = `/${endpoint}`;
  }
}
