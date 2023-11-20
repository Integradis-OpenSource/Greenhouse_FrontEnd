import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Crop} from "../model/crop";
import {AuthService} from "../../shared/services/auth.service";
import {TokenStorageService} from "../../shared/services/tokenStorage.service";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CropsService extends BaseService<Crop> {
  constructor(http: HttpClient, tokenStorageService: TokenStorageService) {
    super(http, tokenStorageService)
    //this.basePath = "https://my-json-server.typicode.com/CarloLSG/GreenhouseFakeAPI1"
    this.basePath = "https://greenhouse.zeabur.app/api/v1/crops/"
    //this.basePath = 'http://localhost:8080/api/v1/crops/';
    this.resourceModifier = "end_phase";
  }

  setResourceEndpoint(endpoint: string) {
    this.resourceEndpoint = `${endpoint}`;
  }

  setBasePath(path: string) {
    this.basePath = path;
  }

  getEndpoint() {
    return this.basePath+ this.resourceEndpoint;
  }

}
