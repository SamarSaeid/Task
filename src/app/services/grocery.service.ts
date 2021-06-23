import { Injectable } from '@angular/core';
import { Grocery } from 'src/app/Grocery';
import {Observable, of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'



const httpOptions = {

  headers: new HttpHeaders({

    'Content-Type': 'application/json',

    "Access-Control-Allow-Methods":"GET, POST, OPTIONS, PUT, DELETE"
  })

}

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private apiurl='https://private-anon-ee6b296626-cwfrontendassessmentapi.apiary-mock.com/groceries'

  constructor(private http:HttpClient) { }


getGroceries() :Observable<Grocery[]>{

  return this.http.get<Grocery[]>(this.apiurl);}


deleteGrocery(grocery: Grocery): Observable<Grocery> {

  const url= `${this.apiurl}/${grocery.name}`;
  return this.http.delete<Grocery>(url);

}


 addGrocery(grocery: Grocery): Observable<Grocery>{

   return this.http.post<Grocery>(this.apiurl,grocery,httpOptions);
 }

editGrocery(grocery :Grocery): Observable<Grocery>{

  const url= `${this.apiurl}/${grocery.name}`;
   return this.http.put<Grocery>(url,grocery, httpOptions);



}


}
