import { Component, Input, OnInit } from '@angular/core';
import { Unit } from 'src/app/Unit';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  unitsList: Unit[]=[];
  @Input() unit;

  constructor(private unitService:UnitService) { }

  ngOnInit(){

    this.unitService.getUnits().subscribe((unitsList) => {
      let allUnits = [];
      allUnits = Object.values(unitsList);
      this.unitsList = allUnits[1];

    });

  }

}
