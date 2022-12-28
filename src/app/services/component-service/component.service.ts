import { Injectable } from '@angular/core';
import {ComponentModel} from "../../models/component/component-model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  private static url = "localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public getComponents(): Observable<ComponentModel[]> {
    return this.httpClient.get<ComponentModel[]>(ComponentService.url + "/components");
  }
}
