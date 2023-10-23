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
        console.log('Data inside',this.dataSource.data);
        this.addColumns(this.dataSource.data)
      });
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  addColumns(response: any) {
    let processEntry = response[0];
    console.log('Process Entry', processEntry);
    let keys = Object.keys(processEntry);
    console.log('Keys', keys);
    keys.forEach((key) => {
      if (key !== 'id' && key !== '__v' && key !== 'processType' && key !== 'apiId' && key !== 'crop_id' && key !== 'author' && key !== 'day' && key !== 'date' && key !== 'time') {
        console.log('Key', key);
        this.columns.push({
          columnDef: key,
          header: key,
          cell: (element: ProcessEntry) => `${element[key]}`,
        });
      }
    });
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }


    ngOnInit() {
      this.getAllProcess();
      //this.displayedColumns = this.columns.map(c => c.columnDef);
    }
}
