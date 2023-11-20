import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ProcessEntry} from "../../model/process-entry";
import {ProcessEntriesService} from "../../services/process-entries.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";


@Component({
  selector: 'app-process-table',
  templateUrl: './process-table.component.html',
  styleUrls: ['./process-table.component.css']
})
export class ProcessTableComponent implements OnInit, AfterViewInit {
  dataSource: MatTableDataSource<ProcessEntry>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
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
  showDialog: boolean = false;
  dialogFields: Array<string> = [];
  inputFields: { [key: string]: string } = {};
  dialogFieldValues: { [key: string]: string } = {};
  displayedColumns: Array<String> = [];
  @Input() cropId: number = 0;
  @Input() processType: string;
  @Input() phase: string = '';
  @Input() step: string = '';
  @Input() stepNumber: string = '';

  constructor(private processApiService: ProcessEntriesService) {
    this.processType = '';
    this.dataSource = new MatTableDataSource<ProcessEntry>();
    this.dialogFields = [];
    this.dialogFieldValues = {};
    this.paginator = {} as MatPaginator;
  }

  getAllProcess() {
    this.processApiService.setResourceEndpoint(this.processType);
    this.processApiService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      this.addColumns(this.dataSource.data)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addColumns(response: any) {
    let processEntry = response[0];
    let keys = Object.keys(processEntry);
    const formatHeader = (key: string) => {
      return key.replace(/([A-Z])/g, ' $1').trim().replace(/^\w/, (c) => c.toUpperCase());
    };

    keys.forEach((key) => {
      if (key !== 'id' && key !== '__v' && key !== 'processType' && key !== 'apiId' && key !== 'crop_id' && key !== 'author' && key !== 'day' && key !== 'date' && key !== 'time'
      && key !== 'formulaId' && key !== 'preparationAreaId' && key !== 'bunkerId' && key !== 'tunnelId' && key != 'growRoomId') {
        this.columns.push({
          columnDef: key,
          header: formatHeader(key),
          cell: (element: ProcessEntry) => `${element[key]}`,
        });
      }
    });
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }

  openInputDialog(): void {
    const stepInputs = {
      'Formula': ['author','hay', 'corn', 'guano', 'cottonSeedCake', 'soybeanMeal', 'gypsum', 'urea', 'ammoniumSulphate'],
      'Preparation Area': ['author', 'activities', 'temperature', 'comment'],
      'Bunker': ['author', 'thermocoupleOne', 'thermocoupleTwo', 'thermocoupleThree', 'frequency', 'comment'],
      'Tunnel': ['author', 'thermocoupleOne', 'thermocoupleTwo', 'thermocoupleThree', 'motorFrequency', 'roomTemperature', 'freshAir', 'recirculation', 'comment'],
      'Incubation': ['author', 'growRoom', 'airTemperature', 'compostTemperature', 'carbonDioxide', 'airHumidity', 'setting', 'comment'],
      'Casing': ['author', 'growRoom', 'airTemperature', 'compostTemperature', 'carbonDioxide', 'airHumidity', 'setting', 'comment'],
      'Induction': ['author', 'growRoom', 'airTemperature', 'compostTemperature', 'carbonDioxide', 'airHumidity', 'setting', 'comment'],
      'Harvest': ['author', 'growRoom', 'airTemperature', 'compostTemperature', 'carbonDioxide', 'airHumidity', 'setting', 'comment'],
    };
    if (this.dataSource.data.length > 0) {
      this.dialogFields = this.columns.map(column => column.columnDef);
      const fieldsToExclude = ['formulaId', "preparationAreaId", "bunkerId", "tunnelId", "incubationId", "casingId", "inductionId", "harvestId","day", 'date', 'time', 'cropPhase'];
      this.dialogFields = this.dialogFields.filter(field => !fieldsToExclude.includes(field));
    } else {
      if (stepInputs[this.step as keyof typeof stepInputs]) { // Use a type assertion
        this.dialogFields = stepInputs[this.step as keyof typeof stepInputs];
      }
    }
    this.dialogFields.forEach(field => {
      this.inputFields[field] = '';
    });
    this.showDialog = true;
  }

  saveRecord() {
    const dataToSave = this.inputFields;
    this.processApiService.setResourceEndpoint(this.processType);
    this.processApiService.create(dataToSave).subscribe((response: any) => {
      console.log('Response', response);
    });
    this.dialogFields.forEach(field => {
      this.inputFields[field] = '';
    });
    const currentData = this.dataSource.data;
    currentData.push(<ProcessEntry>dataToSave);
    this.dataSource.data = currentData;
    if (currentData.length <= 1) this.getAllProcess();
    this.showDialog = false;
  }

  cancelDialog() {
    this.showDialog = false;
  }

  ngOnInit() {
    this.getAllProcess();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
