import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Unit } from 'src/app/Unit';
import { UnitService } from 'src/app/services/unit.service';
import {FormControl} from '@angular/forms';
import { Grocery } from 'src/app/Grocery';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css']
})
export class AddGroceryComponent implements OnInit {

  @Output() onAddGrocery: EventEmitter<Grocery>= new EventEmitter();




  name: string;
  quantity: number;
  
  unitsList: Unit[]=[];
  unitstr: string;
  showAddItem: boolean;
  subscription: Subscription;


  constructor(private uiService:UiService) {

    this.subscription=this.uiService
    .onToggle()
    .subscribe((value)=> (this.showAddItem=value));

   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.unitstr);

    if(!this.name){

      alert('Please add name');
      return;
    }
    else if (!this.quantity){

      alert('Please add a quantiy, min=1');
      return;
    }

    const newGrocery={

      name: this.name,
      quantity: this.quantity,
      unit: String(this.unitstr),

     
      

    };


    this.onAddGrocery.emit(newGrocery);


    
     this.name='';
     this.quantity=null;
    


  }
 

}
