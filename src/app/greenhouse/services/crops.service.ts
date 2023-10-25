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
    this.resourceEndpoint = "/crops";
  }

  setResourceEndpoint(endpoint: string) {
    const cropString = "/crops";
    this.resourceEndpoint = `${cropString}/${endpoint}`;
  }
}
