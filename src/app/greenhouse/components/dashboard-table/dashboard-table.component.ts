import {Component, Input, OnInit} from '@angular/core';
import {ProcessEntryDashboardTable} from "../../model/process-entry-dashboard-table";
import {ProcessEntriesDashboardTableService} from "../../services/process-entries-dashboard-table.service";
import {MatTableDataSource} from "@angular/material/table";
@Component({
  selector: 'app-dashboard-table',
  templateUrl: './dashboard-table.component.html',
  styleUrls: ['./dashboard-table.component.css']
})
export class DashboardTableComponent implements OnInit {
  dataSource: MatTableDataSource<ProcessEntryDashboardTable>;
  columns = [
    {
      columnDef: 'cropId',
      header: 'Crop ID',
      cell: (element: ProcessEntryDashboardTable) => `${element.cropId}`,
    },
    {
      columnDef: 'author',
      header: 'Author',
      cell: (element: ProcessEntryDashboardTable) => `${element.author}`,
    },
    {
      columnDef: 'startDate',
      header: 'Crop Start Date',
      cell: (element: ProcessEntryDashboardTable) => `${element.startDate}`,
    },
    {
      columnDef: 'currentPhase',
      header: 'Current Phase',
      cell: (element: ProcessEntryDashboardTable) => `${element.currentPhase}`,
    },
    {
      columnDef: 'recordDate',
      header: 'Record Date',
      cell: (element: ProcessEntryDashboardTable) => `${element.date}`,
    },
    {
      columnDef: 'recordTime',
      header: 'Record Time',
      cell: (element: ProcessEntryDashboardTable) => `${element.time}`,
    },
    {
      columnDef: 'comment',
      header: 'Comment',
      cell: (element: ProcessEntryDashboardTable) => `${element.comment}`,
    },
  ];
  displayedColumns: Array<String> = [];

  @Input() processType :string;

  constructor(private processApiService: ProcessEntriesDashboardTableService){
    this.processType = '';
    this.dataSource = new MatTableDataSource<ProcessEntryDashboardTable>();

  }

  getAllProcess() {
    this.processApiService.setResourceEndpoint(this.processType);
    this.processApiService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;

    });
  }

  ngOnInit() {
    this.getAllProcess();
    this.displayedColumns = this.columns.map(c => c.columnDef);
  }
}

