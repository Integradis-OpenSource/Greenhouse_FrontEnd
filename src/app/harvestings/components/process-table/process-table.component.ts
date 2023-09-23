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
      this.processApiService.getAll().subscribe((response: any) => {
        this.dataSource.data = response;
      });
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    ngOnInit() {
      // TO DO: Implement dynamic column selection
      this.getAllProcess();
      this.displayedColumns = this.columns.map(c => c.columnDef);
    }


}
