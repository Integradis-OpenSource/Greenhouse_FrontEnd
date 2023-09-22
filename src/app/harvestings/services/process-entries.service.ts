import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service";
import {ProcessEntry} from "../model/process-entry";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProcessEntriesService extends BaseService<ProcessEntry> {

  constructor(http: HttpClient) {
    super(http)
    this.basePath = 'http://localhost:3000/api/v1/stock'
  }


}
