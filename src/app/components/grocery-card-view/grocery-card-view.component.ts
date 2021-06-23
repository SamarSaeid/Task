import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Grocery } from '../../Grocery'
import { Unit } from 'src/app/Unit';

import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-grocery-card-view',
  templateUrl: './grocery-card-view.component.html',
  styleUrls: ['./grocery-card-view.component.css']
})
export class GroceryCardViewComponent implements OnInit {

  @Input() grocery: Grocery;
  @Output() onDeleteGrocery: EventEmitter<Grocery> = new EventEmitter();
  faTimes= faTimes;

  constructor() {  
  }

  ngOnInit(): void {
  }



  onDelete(grocery){


    this.onDeleteGrocery.emit(grocery);
  }


}
