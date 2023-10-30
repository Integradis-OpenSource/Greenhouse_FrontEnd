import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Crop} from "../model/crop";
import {BaseService} from "../../shared/services/base.service";

@Injectable({
  providedIn: 'root'
})
export class CropsService extends BaseService<Crop> {
  constructor(http: HttpClient) {
    super(http)
    this.basePath = "https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI1"
    this.resourceEndpoint = "/crops";
  }
}
