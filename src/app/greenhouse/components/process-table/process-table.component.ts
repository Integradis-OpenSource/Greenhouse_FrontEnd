import {Component, Input, OnInit} from '@angular/core';
import {ProcessEntry} from "../../model/process-entry";
import {ProcessEntriesService} from "../../services/process-entries.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.css']
})
export class ProcessTableComponent implements OnInit {
    dataSource: MatTableDataSource<ProcessEntry>;
    columns = [
      {
        columnDef: 'author',
        header: 'Author',
        cell: (element: ProcessEntry) => `${element.author}`,
      },
      {
        columnDef: 'day',
        header: 'Day',
        cell: (element: ProcessEntry) => `${element.day}`,
      },
      {
        columnDef: 'date',
        header: 'Date',
        cell: (element: ProcessEntry) => `${element.date}`,
      },
      {
        columnDef: 'time',
        header: 'Time',
        cell: (element: ProcessEntry) => `${element.time}`,
      },

    ];
    displayedColumns: Array<String> = [];

    @Input() processType :string;

    constructor(private processApiService: ProcessEntriesService){
      this.processType = '';
      this.dataSource = new MatTableDataSource<ProcessEntry>();

    }

    getAllProcess() {
      this.processApiService.setResourceEndpoint(this.processType);
      this.processApiService.getAll().subscribe((response: any) => {
        this.dataSource.data = response;

      });
      this.addColumns();
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  addColumns() {
    if (this.processType === 'stock') {
      this.columns.push({
        columnDef: 'hay',
        header: 'Hay',
        cell: (element: ProcessEntry) => `${element.hay}`,
      });
      this.columns.push({
        columnDef: 'corn',
        header: 'Corn',
        cell: (element: ProcessEntry) => `${element.corn}`,
      });
      this.columns.push({
        columnDef: 'guano',
        header: 'Guano',
        cell: (element: ProcessEntry) => `${element.guano}`,
      });
      this.columns.push({
        columnDef: 'cottonSeedCake',
        header: 'Cotton Seed Cake',
        cell: (element: ProcessEntry) => `${element.cottonSeedCake}`,
      });
      this.columns.push({
        columnDef: 'soybeanMeal',
        header: 'Soybean Meal',
        cell: (element: ProcessEntry) => `${element.soybeanMeal}`,
      });
      this.columns.push({
        columnDef: 'gypsum',
        header: 'Gypsum',
        cell: (element: ProcessEntry) => `${element.gypsum}`,
      });
      this.columns.push({
        columnDef: 'urea',
        header: 'Urea',
        cell: (element: ProcessEntry) => `${element.urea}`,
      });
      this.columns.push({
        columnDef: 'ammoniumSulphate',
        header: 'Ammonium Sulphate',
        cell: (element: ProcessEntry) => `${element.ammoniumSulphate}`,
      });
    }
    else if (this.processType === 'preparation_area') {
      this.columns.push({
        columnDef: 'activities',
        header: 'Activities',
        cell: (element: ProcessEntry) => `${element.activities}`,
      });
      this.columns.push({
        columnDef: 'temperature',
        header: 'T°',
        cell: (element: ProcessEntry) => `${element.temperature}`,
      });
      this.columns.push({
        columnDef: 'comment',
        header: 'Comment',
        cell: (element: ProcessEntry) => `${element.comment}`,
      });
    }
    else if (this.processType === 'bunker') {
      this.columns.push({
        columnDef: 'thermocouple_one',
        header: 'T1',
        cell: (element: ProcessEntry) => `${element.thermocoupleOne}`,
      });
      this.columns.push({
        columnDef: 'thermocouple_two',
        header: 'T2',
        cell: (element: ProcessEntry) => `${element.thermocoupleTwo}`,
      });
      this.columns.push({
        columnDef: 'thermocouple_three',
        header: 'T3',
        cell: (element: ProcessEntry) => `${element.thermocoupleThree}`,
      });
      this.columns.push({
        columnDef: 'average_thermocouple',
        header: 'TP',
        cell: (element: ProcessEntry) => `${element.averageThermocouple}`,
      });
      this.columns.push({
        columnDef: 'frequency',
        header: 'FREQ',
        cell: (element: ProcessEntry) => `${element.frequency}`,
      });
      this.columns.push({
        columnDef: 'comment',
        header: 'Comment',
        cell: (element: ProcessEntry) => `${element.comment}`,
      });
    }
    else if (this.processType === 'tunnel') {
      this.columns.push({
        columnDef: 'grow_room',
        header: 'Grow Room',
        cell: (element: ProcessEntry) => `${element.growRoom}`,
      });
      this.columns.push({
        columnDef: 'thermocouple_one',
        header: 'T1',
        cell: (element: ProcessEntry) => `${element.thermocoupleOne}`,
      });
      this.columns.push({
        columnDef: 'thermocouple_two',
        header: 'T2',
        cell: (element: ProcessEntry) => `${element.thermocoupleTwo}`,
      });
      this.columns.push({
        columnDef: 'thermocouple_three',
        header: 'T3',
        cell: (element: ProcessEntry) => `${element.thermocoupleThree}`,
      });
      this.columns.push({
        columnDef: 'average_thermocouple',
        header: 'TP',
        cell: (element: ProcessEntry) => `${element.averageThermocouple}`,
      });
      this.columns.push({
        columnDef: 'comment',
        header: 'Comment',
        cell: (element: ProcessEntry) => `${element.comment}`,
      });
    }
    else if (this.processType === 'grow_room_record?processType=Incubation' || this.processType === 'grow_room_record?processType=Casing'
      || this.processType === 'grow_room_record?processType=Induction' || this.processType === 'grow_room_record?processType=Harvest') {
      this.columns.push({
        columnDef: 'grow_room',
        header: 'Grow Room',
        cell: (element: ProcessEntry) => `${element.growRoom}`,
      });
      this.columns.push({
        columnDef: 'air_temperature',
        header: 'Air Temperature',
        cell: (element: ProcessEntry) => `${element.airTemperature}`,
      });
      this.columns.push({
        columnDef: 'compost_temperature',
        header: 'Compost Temperature',
        cell: (element: ProcessEntry) => `${element.compostTemperature}`,
      });
      this.columns.push({
        columnDef: 'carbon_dioxide',
        header: 'CO2',
        cell: (element: ProcessEntry) => `${element.carbonDioxide}`,
      });
      this.columns.push({
        columnDef: 'air_hydrogen',
        header: 'H2',
        cell: (element: ProcessEntry) => `${element.airHydrogen}`,
      });
      this.columns.push({
        columnDef: 'setting',
        header: 'Setting',
        cell: (element: ProcessEntry) => `${element.setting}`,
      });
      this.columns.push({
        columnDef: 'comment',
        header: 'Comment',
        cell: (element: ProcessEntry) => `${element.comment}`,
      });
    }
  }


    ngOnInit() {
      this.getAllProcess();
      this.displayedColumns = this.columns.map(c => c.columnDef);
    }
}
