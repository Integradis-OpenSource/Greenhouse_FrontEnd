import {Component, Input, OnInit} from '@angular/core';
import {ProcessEntry} from "../../model/process-entry";
import {ProcessEntriesService} from "../../services/process-entries.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";

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
  record: string = '';
  showDialog: boolean = false;
  dialogFields: Array<string> = [];
  dialogFieldValues: { [key: string]: string } = {};
    displayedColumns: Array<String> = [];
    @Input( ) cropId: number = 0;
    @Input() processType :string;
    @Input() phase: string = '';
    @Input() step: string = '';

    constructor(private processApiService: ProcessEntriesService, private dialog: MatDialog){
      this.processType = '';
      this.dataSource = new MatTableDataSource<ProcessEntry>();
      this.dialogFields = [];
      this.dialogFieldValues = {};
    }

    getAllProcess() {
      console.log('Process type',this.processType);
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
    this.dialogFields = this.columns.map(column => column.columnDef);
    this.showDialog = true;
  }

  saveRecord() {
    // Aquí puedes procesar y guardar el valor del input
    console.log('Recorded information:', this.record);
    this.showDialog = false;
  }

  cancelDialog() {
    this.showDialog = false;
  }
    ngOnInit() {
      this.getAllProcess();
      console.log('Fase',this.phase);
    }
}
