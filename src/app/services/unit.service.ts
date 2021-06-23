import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import {Observable, of} from 'rxjs';
import {Unit} from 'src/app/Unit'
@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private apiurl='https://private-anon-ee6b296626-cwfrontendassessmentapi.apiary-mock.com/units'

  constructor(private http:HttpClient) { }

  getUnits() :Observable<Unit[]>{

    return this.http.get<Unit[]>(this.apiurl);
  
  }

}
