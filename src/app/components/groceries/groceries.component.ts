import { Component, OnInit } from '@angular/core';
import { Grocery } from 'src/app/Grocery';
import { GroceryService } from 'src/app/services/grocery.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {

  groceriesList: Grocery[]=[];
  grocery :any;
  

  constructor(private groceryService:GroceryService) { }

  ngOnInit(): void {
   this.groceryService.getGroceries().subscribe((groceries)=> {
     let allGroceries = [];
     allGroceries= Object.values(groceries);
     this.groceriesList=allGroceries[1]; });
      
  }


  deleteGrocery(grocery : Grocery){
     this.groceryService.deleteGrocery(grocery).subscribe(()=> (this
      .groceriesList = this.groceriesList.filter(g=> g.name !== grocery.name)));


  }


  addGrocery(grocery : Grocery){

    console.log(grocery);

   // this.groceryService.addGrocery(grocery).subscribe((grocery) => this.groceriesList.push(grocery));

  }

  // onEditGrocery(grocery : Grocery){

//
  //   this.groceryService.editGrocery(grocery).subscribe();

  // }


}
