import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FrontDto} from "../../models/component/front-dto";
import {ErrorSuggestionDto} from "../../models/component/error-suggestion-dto";
import {FactModelView} from "../../models/component/fact-model-view";

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private httpClient: HttpClient) { }

  public getFactsGraph(): Observable<FrontDto> {
    return this.httpClient.get<FrontDto>(environment.url + "/api/factsConnected");
  }

  public getFacts(): Observable<FactModelView[]> {
    return this.httpClient.get<FactModelView[]>(environment.url + "/api/facts");
  }

  public getAnalysis(initialFactsChosen: string[]): Observable<ErrorSuggestionDto> {
    return this.httpClient.post<ErrorSuggestionDto>(environment.url + "/api/analysis", initialFactsChosen);
  }
}
