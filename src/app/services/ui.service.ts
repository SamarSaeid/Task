import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showwAddGrocery: boolean=false;
  private subject = new Subject<any>();


  constructor() { }

  toggleAddItem(): void{
    this.showwAddGrocery=!this.showwAddGrocery;
    this.subject.next(this.showwAddGrocery)

  }

  onToggle(): Observable<any>{

    return this.subject.asObservable();

  }

}
