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
      if (key !== 'id' && key !== '__v' && key !== 'processType' && key !== 'apiId' && key !== 'crop_id' && key !== 'author' && key !== 'day' && key !== 'date' && key !== 'time') {
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
      'Stock': ['day', 'hay', 'corn', 'guano', 'cottonSeedCake', 'soybeanMeal', 'gypsum', 'urea', 'ammoniumSulphate'],
      'Preparation area': ['day', 'activities', 'temperature', 'comment'],
      'Bunker': ['day', 't1', 't2', 't3', 'tp', 'frequency', 'comment'],
      'Tunnel': ['day', 'growRoom', 't1', 't2', 't3', 'tp', 'ta', 'comment'],
      'Incubation': ['day', 'growRoom', 'airTemperature', 'compostTemperature', 'carbonDioxide', 'airHydrogen', 'setting', 'comment'],
      'Casing': ['day', 'growRoom', 'airTemperature', 'compostTemperature', 'carbonDioxide', 'airHydrogen', 'setting', 'comment'],
      'Induction': ['day', 'growRoom', 'airTemperature', 'compostTemperature', 'carbonDioxide', 'airHydrogen', 'setting', 'comment'],
      'Harvest': ['day', 'growRoom', 'airTemperature', 'compostTemperature', 'carbonDioxide', 'airHydrogen', 'setting', 'comment'],
    };
    if (this.dataSource.data.length > 0) {
      this.dialogFields = this.columns.map(column => column.columnDef);
      const fieldsToExclude = ['crop_id', 'author', 'date', 'time', 'processType'];
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

  generateDataToSave(): any {
    const currentDateTime = new Date();
    const currentDate = currentDateTime.toISOString().split('T')[0];
    const currentTime = currentDateTime.toTimeString().split(' ')[0];
    let commonData: {
      author: string,
      date: string,
      time: string,
      crop_id: number,
      processType?: string;
    } = {
      crop_id: this.cropId,
      author: 'Winston Smith',
      date: currentDate,
      time: currentTime,
    }
    if (this.step === 'Incubation' || this.step === 'Casing' || this.step === 'Induction' || this.step === 'Harvest') {
      commonData.processType = this.step;
    }
    return {
      ...commonData, ...this.inputFields
    };
  }

  saveRecord() {
    const dataToSave = this.generateDataToSave();
    this.processApiService.setResourceEndpoint(this.processType);
    this.processApiService.create(dataToSave).subscribe((response: any) => {
      console.log('Response', response);
    });
    this.dialogFields.forEach(field => {
      this.inputFields[field] = '';
    });
    const currentData = this.dataSource.data;
    currentData.push(dataToSave);
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
