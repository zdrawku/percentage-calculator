import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ResultModel } from '../models/calculate-percentages/result-model';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://perc-calc.appbuilder.dev';

@Injectable({
  providedIn: 'root'
})
export class CalculatePercentagesService {
  constructor(
    private http: HttpClient
  ) { }

  public getResultModel(whatIs: number, ofWhat: number): Observable<ResultModel | undefined> {
    const params = new HttpParams()
      .append('whatIs', whatIs)
      .append('ofWhat', ofWhat);
    const options = {
      params,
    };
    return this.http.get<ResultModel | undefined>(`${API_ENDPOINT}/PercentageCalculations/CalcWhatIsXpercentOfY`, options)
      .pipe(catchError(ErrorHandlerService.handleError<ResultModel | undefined>('getResultModel', undefined)));
  }

  public getResultModel1(whatIs: number = 50, ofWhat: number = 55): Observable<ResultModel | undefined> {
    const params = new HttpParams()
      .append('whatIs', whatIs)
      .append('ofWhat', ofWhat);
    const options = {
      params,
    };
    return this.http.get<ResultModel | undefined>(`${API_ENDPOINT}/PercentageCalculations/CalcWhatIsPercentChangeFromXtoY`, options)
      .pipe(catchError(ErrorHandlerService.handleError<ResultModel | undefined>('getResultModel1', undefined)));
  }

  public getResultModel2(whatIs: number = 20, ofWhat: number = 100): Observable<ResultModel | undefined> {
    const params = new HttpParams()
      .append('whatIs', whatIs)
      .append('ofWhat', ofWhat);
    const options = {
      params,
    };
    return this.http.get<ResultModel | undefined>(`${API_ENDPOINT}/PercentageCalculations/CalcXisWhatPercentOfY`, options)
      .pipe(catchError(ErrorHandlerService.handleError<ResultModel | undefined>('getResultModel2', undefined)));
  }
}
